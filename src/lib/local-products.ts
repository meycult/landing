import type { Product } from '@/types/fourthwall'

const localProducts: Product[] = [
  {
    id: 'local-1',
    name: 'Oracle Sigil Tee',
    slug: 'oracle-tee',
    description:
      'Left-chest sigil of the Oracle Eye — the mark of one who sees what others miss. Heavyweight solid tee in void black. DTG-printed jade-on-black, premium feel.<br><br>Signature MeyCult oracle eye sigil. Void black heavyweight tee. 100% combed ring-spun cotton. NOT FINANCIAL ADVICE. VOID WHERE PROHIBITED.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-1-img', url: '/products/oracle-tee.png', width: 1050, height: 1050, transformedUrl: '/products/oracle-tee.png' }],
    variants: [
      {
        id: 'local-1-s',
        name: 'S',
        sku: 'ORACLE-TEE-S',
        unitPrice: { value: 50.0, currency: 'USD' },
        attributes: { description: 'Small', size: { name: 'S' } },
        stock: { type: 'UNLIMITED' },
        images: [],
      },
      {
        id: 'local-1-m',
        name: 'M',
        sku: 'ORACLE-TEE-M',
        unitPrice: { value: 50.0, currency: 'USD' },
        attributes: { description: 'Medium', size: { name: 'M' } },
        stock: { type: 'UNLIMITED' },
        images: [],
      },
      {
        id: 'local-1-l',
        name: 'L',
        sku: 'ORACLE-TEE-L',
        unitPrice: { value: 50.0, currency: 'USD' },
        attributes: { description: 'Large', size: { name: 'L' } },
        stock: { type: 'UNLIMITED' },
        images: [],
      },
      {
        id: 'local-1-xl',
        name: 'XL',
        sku: 'ORACLE-TEE-XL',
        unitPrice: { value: 50.0, currency: 'USD' },
        attributes: { description: 'X-Large', size: { name: 'XL' } },
        stock: { type: 'UNLIMITED' },
        images: [],
      },
    ],
  },
  {
    id: 'local-2',
    name: 'Welcome to the Cult Hoodie',
    slug: 'cult-hoodie',
    description:
      'Front chest sigil. Back: the oracle eye erupts in jade, framed by "WELCOME TO THE CULT" — your induction into the order.<br><br>Sleeve bears the ticker: CLTINF · CLTFTE. Inside neck: THIS IS NOT A CULT*. Your journey begins here.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-2-img', url: '/products/cult-hoodie.png', width: 4500, height: 5400, transformedUrl: '/products/cult-hoodie.png' }],
    variants: [
      { id: 'local-2-m', name: 'M', sku: 'HOODIE-M', unitPrice: { value: 100.0, currency: 'USD' }, attributes: { description: 'Medium', size: { name: 'M' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-2-l', name: 'L', sku: 'HOODIE-L', unitPrice: { value: 100.0, currency: 'USD' }, attributes: { description: 'Large', size: { name: 'L' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-2-xl', name: 'XL', sku: 'HOODIE-XL', unitPrice: { value: 100.0, currency: 'USD' }, attributes: { description: 'X-Large', size: { name: 'XL' } }, stock: { type: 'UNLIMITED' }, images: [] },
    ],
  },
  {
    id: 'local-3',
    name: 'Foresight Becomes Fortune Tee',
    slug: 'foresight-tee',
    description:
      'Full back print of the MeyCult creed — "FORESIGHT BECOMES FORTUNE" — the reward for those who wager wisely. Hem marked: NO PURCHASE NECESSARY. Because foresight needs no price.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-3-img', url: '/products/foresight-tee.png', width: 4500, height: 5400, transformedUrl: '/products/foresight-tee.png' }],
    variants: [
      { id: 'local-3-s', name: 'S', sku: 'FORESIGHT-S', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Small', size: { name: 'S' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-3-m', name: 'M', sku: 'FORESIGHT-M', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Medium', size: { name: 'M' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-3-l', name: 'L', sku: 'FORESIGHT-L', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Large', size: { name: 'L' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-3-xl', name: 'XL', sku: 'FORESIGHT-XL', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'X-Large', size: { name: 'XL' } }, stock: { type: 'UNLIMITED' }, images: [] },
    ],
  },
  {
    id: 'local-4',
    name: 'Ascended Tee — Oracle Tier',
    slug: 'ascended-tee',
    description:
      'Back print: "ASCENDED" — radiant, centered, final. Small front chest sigil. You have completed the journey. You are the Oracle.<br><br>Sleeve: NOT FINANCIAL ADVICE.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-4-img', url: '/products/ascended-tee.png', width: 4500, height: 5400, transformedUrl: '/products/ascended-tee.png' }],
    variants: [
      { id: 'local-4-s', name: 'S', sku: 'ASCENDED-S', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Small', size: { name: 'S' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-4-m', name: 'M', sku: 'ASCENDED-M', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Medium', size: { name: 'M' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-4-l', name: 'L', sku: 'ASCENDED-L', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Large', size: { name: 'L' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-4-xl', name: 'XL', sku: 'ASCENDED-XL', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'X-Large', size: { name: 'XL' } }, stock: { type: 'UNLIMITED' }, images: [] },
    ],
  },
  {
    id: 'local-5',
    name: 'Monomyth Spine Tee',
    slug: 'spine-tee',
    description:
      'Down the back: FORESEE · WAGER · ASCEND — the three beats of the Oracle monomyth. Vertical. Centered. Complete. The whole arc in one vertical breath.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-5-img', url: '/products/spine-tee.png', width: 800, height: 800, transformedUrl: '/products/spine-tee.png' }],
    variants: [
      { id: 'local-5-s', name: 'S', sku: 'SPINE-S', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Small', size: { name: 'S' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-5-m', name: 'M', sku: 'SPINE-M', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Medium', size: { name: 'M' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-5-l', name: 'L', sku: 'SPINE-L', unitPrice: { value: 50.0, currency: 'USD' }, attributes: { description: 'Large', size: { name: 'L' } }, stock: { type: 'UNLIMITED' }, images: [] },
    ],
  },
  {
    id: 'local-6',
    name: 'Oracle Joggers',
    slug: 'oracle-joggers',
    description:
      'Left-thigh print: FORESEE · WAGER · ASCEND vertical lockup. Subtle. Clean. Cult-ready. Foresight, from head to toe.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-6-img', url: '/products/oracle-joggers.png', width: 600, height: 600, transformedUrl: '/products/oracle-joggers.png' }],
    variants: [
      { id: 'local-6-s', name: 'S', sku: 'JOGGER-S', unitPrice: { value: 75.0, currency: 'USD' }, attributes: { description: 'Small', size: { name: 'S' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-6-m', name: 'M', sku: 'JOGGER-M', unitPrice: { value: 75.0, currency: 'USD' }, attributes: { description: 'Medium', size: { name: 'M' } }, stock: { type: 'UNLIMITED' }, images: [] },
      { id: 'local-6-l', name: 'L', sku: 'JOGGER-L', unitPrice: { value: 75.0, currency: 'USD' }, attributes: { description: 'Large', size: { name: 'L' } }, stock: { type: 'UNLIMITED' }, images: [] },
    ],
  },
  {
    id: 'local-7',
    name: 'Oracle Sigil Snapback',
    slug: 'snapback',
    description:
      'Embroidered flat-jade oracle eye on the front. One size fits most. Black. See the future, look good doing it.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-7-img', url: '/products/snapback.png', width: 900, height: 900, transformedUrl: '/products/snapback.png' }],
    variants: [
      { id: 'local-7-os', name: 'One Size', sku: 'CAP-OS', unitPrice: { value: 25.0, currency: 'USD' }, attributes: { description: 'One Size', size: { name: 'OS' } }, stock: { type: 'UNLIMITED' }, images: [] },
    ],
  },
  {
    id: 'local-8',
    name: 'Oracle Mug',
    slug: 'oracle-mug',
    description:
      'Full-wrap sigil + MeyCult wordmark + QUEST MARKETS tagline. 11oz black ceramic. Your morning ritual. Your quest awaits.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-8-img', url: '/products/oracle-mug.png', width: 600, height: 600, transformedUrl: '/products/oracle-mug.png' }],
    variants: [
      { id: 'local-8-11oz', name: '11oz', sku: 'MUG-11', unitPrice: { value: 25.0, currency: 'USD' }, attributes: { description: '11oz Mug', size: { name: '11oz' } }, stock: { type: 'UNLIMITED' }, images: [] },
    ],
  },
  {
    id: 'local-9',
    name: 'Sticker Pack (5-Pack)',
    slug: 'sticker-pack',
    description:
      'Oracle sigil die-cut · WELCOME TO THE CULT · FORESIGHT BECOMES FORTUNE · THIS IS NOT A CULT* · CLTINF · CLTFTE ticker. Each 3" die-cut vinyl. Weatherproof. Stick them on laptops, water bottles, street signs, confession booths.',
    state: { type: 'AVAILABLE' },
    access: { type: 'PUBLIC' },
    images: [{ id: 'local-9-img', url: '/products/sticker-pack.png', width: 900, height: 900, transformedUrl: '/products/sticker-pack.png' }],
    variants: [
      { id: 'local-9-5pk', name: '5-Pack', sku: 'STICKER-5', unitPrice: { value: 25.0, currency: 'USD' }, attributes: { description: '5 Stickers' }, stock: { type: 'UNLIMITED' }, images: [] },
    ],
  },
]

export function getLocalProducts(): Product[] {
  return localProducts
}

export function getLocalProduct(slug: string): Product | undefined {
  return localProducts.find((p) => p.slug === slug)
}
