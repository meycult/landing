import type { ProductVariant } from '@/types/fourthwall'

export default function VariantSelector({
  variants,
  selected,
  onSelect,
}: {
  variants: ProductVariant[]
  selected: string | null
  onSelect: (id: string) => void
}) {
  if (variants.length <= 1) return null

  const sizes = [...new Set(variants.map((v) => v.attributes.size?.name).filter(Boolean))]
  const colors = [...new Set(variants.map((v) => v.attributes.color?.name).filter(Boolean))]

  function findVariant(size?: string | null, color?: string | null) {
    return variants.find((v) => {
      const matchSize = !size || v.attributes.size?.name === size
      const matchColor = !color || v.attributes.color?.name === color
      return matchSize && matchColor
    })
  }

  const current = variants.find((v) => v.id === selected)

  return (
    <div className="space-y-3">
      {sizes.length > 0 && (
        <div>
          <span className="ui-label text-text-muted mb-2 block">Size</span>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => {
              const v = findVariant(size, current?.attributes.color?.name)
              const disabled = !v || (v.stock.type === 'LIMITED' && v.stock.inStock <= 0)
              return (
                <button
                  key={size}
                  disabled={disabled}
                  onClick={() => v && onSelect(v.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    current?.attributes.size?.name === size
                      ? 'bg-accent/20 text-accent border-accent/40'
                      : disabled
                      ? 'bg-surface/40 text-text-muted/30 border-line/10 cursor-not-allowed line-through'
                      : 'bg-surface/60 text-text-muted border-line/20 hover:border-line/40'
                  }`}
                >
                  {size}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {colors.length > 0 && (
        <div>
          <span className="ui-label text-text-muted mb-2 block">Color</span>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => {
              const v = findVariant(current?.attributes.size?.name, color)
              const disabled = !v || (v.stock.type === 'LIMITED' && v.stock.inStock <= 0)
              const swatch = v?.attributes.color?.swatch
              return (
                <button
                  key={color}
                  disabled={disabled}
                  onClick={() => v && onSelect(v.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    current?.attributes.color?.name === color
                      ? 'bg-accent/20 text-accent border-accent/40'
                      : disabled
                      ? 'bg-surface/40 text-text-muted/30 border-line/10 cursor-not-allowed'
                      : 'bg-surface/60 text-text-muted border-line/20 hover:border-line/40'
                  }`}
                >
                  {swatch && (
                    <span className="w-3.5 h-3.5 rounded-full border border-line/30" style={{ backgroundColor: swatch }} />
                  )}
                  {color}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
