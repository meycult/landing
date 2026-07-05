import { NextResponse } from 'next/server'

interface LiveStatus {
  isLive: boolean
  videoId?: string
  channelId?: string
  title?: string
  channelThumbnail?: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const handle = searchParams.get('handle') || 'godemperorbuddy'

  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) {
    return NextResponse.json({ isLive: false, error: 'no_key' })
  }

  try {
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id,snippet&forHandle=${handle}&key=${apiKey}`
    )
    if (!channelRes.ok) {
      return NextResponse.json({ isLive: false, error: 'channel_not_found' })
    }
    const channelData = await channelRes.json()
    const channel = channelData.items?.[0]
    if (!channel) {
      return NextResponse.json({ isLive: false, error: 'channel_not_found' })
    }

    const channelId = channel.id
    const channelThumbnail = channel.snippet?.thumbnails?.default?.url

    const liveRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
    )
    if (!liveRes.ok) {
      return NextResponse.json({ isLive: false, channelThumbnail })
    }

    const liveData = await liveRes.json()
    const liveItem = liveData.items?.[0]
    if (!liveItem) {
      return NextResponse.json({ isLive: false, channelThumbnail })
    }

    return NextResponse.json({
      isLive: true,
      videoId: liveItem.id.videoId,
      channelId,
      title: liveItem.snippet.title,
      channelThumbnail,
    })
  } catch {
    return NextResponse.json({ isLive: false, error: 'api_error' })
  }
}
