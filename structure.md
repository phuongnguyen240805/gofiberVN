.
├── ./Dockerfile
├── ./README.md
├── ./commitlint.config.js
├── ./components.json
├── ./cypress
│   ├── ./cypress/fixtures
│   │   └── ./cypress/fixtures/example.json
│   └── ./cypress/support
│       ├── ./cypress/support/commands.ts
│       └── ./cypress/support/e2e.ts
├── ./cypress.config.ts
├── ./docker-compose.yml
├── ./jest.config.js
├── ./next-env.d.ts
├── ./next-i18next.config.js
├── ./next-seo.config.ts
├── ./next.config.mjs
├── ./open-next.config.ts
├── ./package-lock.json
├── ./package.json
├── ./pnpm-lock.yaml
├── ./postcss.config.js
├── ./prettier.config.cjs
├── ./prisma
│   ├── ./prisma/migrations
│   │   ├── ./prisma/migrations/20220905162741_init
│   │   │   └── ./prisma/migrations/20220905162741_init/migration.sql
│   │   ├── ./prisma/migrations/20221106090003_next_auth
│   │   │   └── ./prisma/migrations/20221106090003_next_auth/migration.sql
│   │   ├── ./prisma/migrations/20221114145112_twitter_oauth_token
│   │   │   └── ./prisma/migrations/20221114145112_twitter_oauth_token/migration.sql
│   │   ├── ./prisma/migrations/20221115083641_product
│   │   │   └── ./prisma/migrations/20221115083641_product/migration.sql
│   │   ├── ./prisma/migrations/20221219082834_update_product
│   │   │   └── ./prisma/migrations/20221219082834_update_product/migration.sql
│   │   ├── ./prisma/migrations/20221219123539_product_color_size_enum
│   │   │   └── ./prisma/migrations/20221219123539_product_color_size_enum/migration.sql
│   │   ├── ./prisma/migrations/20221219124131_update_product_price_type_to_float
│   │   │   └── ./prisma/migrations/20221219124131_update_product_price_type_to_float/migration.sql
│   │   ├── ./prisma/migrations/20221221133305_collections_slug
│   │   │   └── ./prisma/migrations/20221221133305_collections_slug/migration.sql
│   │   ├── ./prisma/migrations/20221225102645_product_image_model
│   │   │   └── ./prisma/migrations/20221225102645_product_image_model/migration.sql
│   │   ├── ./prisma/migrations/20230130205229_drop_subcollections
│   │   │   └── ./prisma/migrations/20230130205229_drop_subcollections/migration.sql
│   │   └── ./prisma/migrations/migration_lock.toml
│   ├── ./prisma/schema.prisma
│   └── ./prisma/seed.ts
├── ./public
│   ├── ./public/_headers
│   ├── ./public/assets
│   │   ├── ./public/assets/1.jpg
│   │   ├── ./public/assets/DMCA_logo-grn-btn150w.png
│   │   ├── ./public/assets/accessories.webp
│   │   ├── ./public/assets/almalinux.svg
│   │   ├── ./public/assets/animal.webp
│   │   ├── ./public/assets/backlink.png
│   │   ├── ./public/assets/bannerchristmas-1212-2-5a9c6137f70394488c2eda659317e914.webp
│   │   ├── ./public/assets/bazaar.svg
│   │   ├── ./public/assets/blog-1.webp
│   │   ├── ./public/assets/blog-2.webp
│   │   ├── ./public/assets/blog-3.webp
│   │   ├── ./public/assets/blog-4.webp
│   │   ├── ./public/assets/blog-5.webp
│   │   ├── ./public/assets/bocongthuong.png
│   │   ├── ./public/assets/boy-back-to-school.webp
│   │   ├── ./public/assets/business-trust-seal-trust-lock.webp
│   │   ├── ./public/assets/bustle.svg
│   │   ├── ./public/assets/carousel-1.webp
│   │   ├── ./public/assets/carousel-2.webp
│   │   ├── ./public/assets/carousel-3.webp
│   │   ├── ./public/assets/cart-empty.webp
│   │   ├── ./public/assets/centos.svg
│   │   ├── ./public/assets/chis.webp
│   │   ├── ./public/assets/clothes.webp
│   │   ├── ./public/assets/collection-bg.webp
│   │   ├── ./public/assets/collection-store-1.webp
│   │   ├── ./public/assets/collection-store-2.webp
│   │   ├── ./public/assets/collection-store-3.webp
│   │   ├── ./public/assets/cpanel.svg
│   │   ├── ./public/assets/create-your-own-new.png
│   │   ├── ./public/assets/create-your-own.webp
│   │   ├── ./public/assets/culture-4125c0fdfe75a125cb51d68eb9eea6a3.jpg
│   │   ├── ./public/assets/de-flag.svg
│   │   ├── ./public/assets/debian.svg
│   │   ├── ./public/assets/docker.svg
│   │   ├── ./public/assets/ealge.webp
│   │   ├── ./public/assets/early-bird.webp
│   │   ├── ./public/assets/en-flag.svg
│   │   ├── ./public/assets/fedora.svg
│   │   ├── ./public/assets/free-return.png
│   │   ├── ./public/assets/godaddy-logo-white.png
│   │   ├── ./public/assets/google.svg
│   │   ├── ./public/assets/guarantee.png
│   │   ├── ./public/assets/hardware.webp
│   │   ├── ./public/assets/header-bg.png
│   │   ├── ./public/assets/hero.webp
│   │   ├── ./public/assets/home.webp
│   │   ├── ./public/assets/hoodies-2.webp
│   │   ├── ./public/assets/hoodies-3.webp
│   │   ├── ./public/assets/hoodies.webp
│   │   ├── ./public/assets/instyle.svg
│   │   ├── ./public/assets/kid.webp
│   │   ├── ./public/assets/local.png
│   │   ├── ./public/assets/logo.webp
│   │   ├── ./public/assets/luggage.webp
│   │   ├── ./public/assets/mail.png
│   │   ├── ./public/assets/materials.svg
│   │   ├── ./public/assets/merry.webp
│   │   ├── ./public/assets/mug.webp
│   │   ├── ./public/assets/music.webp
│   │   ├── ./public/assets/n8n-color-2.svg
│   │   ├── ./public/assets/n8n.jpg
│   │   ├── ./public/assets/n8n.png
│   │   ├── ./public/assets/namecom-logo-white.png
│   │   ├── ./public/assets/no-review.webp
│   │   ├── ./public/assets/offer.webp
│   │   ├── ./public/assets/party.webp
│   │   ├── ./public/assets/payments
│   │   │   ├── ./public/assets/payments/affirm.svg
│   │   │   ├── ./public/assets/payments/after-pay.svg
│   │   │   ├── ./public/assets/payments/klarna.svg
│   │   │   └── ./public/assets/payments/paypal.svg
│   │   ├── ./public/assets/pbn.png
│   │   ├── ./public/assets/pc-back-to-school.jpg
│   │   ├── ./public/assets/personal.webp
│   │   ├── ./public/assets/phone.png
│   │   ├── ./public/assets/plesk_debian.svg
│   │   ├── ./public/assets/privacy-trust-seal-trust-lock.webp
│   │   ├── ./public/assets/products
│   │   │   ├── ./public/assets/products/product-1.jpg
│   │   │   ├── ./public/assets/products/product-10.jpg
│   │   │   ├── ./public/assets/products/product-11.jpg
│   │   │   ├── ./public/assets/products/product-12.jpg
│   │   │   ├── ./public/assets/products/product-13.jpg
│   │   │   ├── ./public/assets/products/product-14.jpg
│   │   │   ├── ./public/assets/products/product-15.jpg
│   │   │   ├── ./public/assets/products/product-16.jpg
│   │   │   ├── ./public/assets/products/product-17.jpg
│   │   │   ├── ./public/assets/products/product-18.jpg
│   │   │   ├── ./public/assets/products/product-19.jpg
│   │   │   ├── ./public/assets/products/product-2.jpg
│   │   │   ├── ./public/assets/products/product-20.jpg
│   │   │   ├── ./public/assets/products/product-21.jpg
│   │   │   ├── ./public/assets/products/product-22.jpg
│   │   │   ├── ./public/assets/products/product-23.jpg
│   │   │   ├── ./public/assets/products/product-24.jpg
│   │   │   ├── ./public/assets/products/product-25.jpg
│   │   │   ├── ./public/assets/products/product-26.jpg
│   │   │   ├── ./public/assets/products/product-27.jpg
│   │   │   ├── ./public/assets/products/product-28.jpg
│   │   │   ├── ./public/assets/products/product-29.jpg
│   │   │   ├── ./public/assets/products/product-3.jpg
│   │   │   ├── ./public/assets/products/product-30.jpg
│   │   │   ├── ./public/assets/products/product-31.jpg
│   │   │   ├── ./public/assets/products/product-32.jpg
│   │   │   ├── ./public/assets/products/product-33.jpg
│   │   │   ├── ./public/assets/products/product-34.jpg
│   │   │   ├── ./public/assets/products/product-35.jpg
│   │   │   ├── ./public/assets/products/product-36.jpg
│   │   │   ├── ./public/assets/products/product-37.jpg
│   │   │   ├── ./public/assets/products/product-38.jpg
│   │   │   ├── ./public/assets/products/product-39.jpg
│   │   │   ├── ./public/assets/products/product-4.jpg
│   │   │   ├── ./public/assets/products/product-40.jpg
│   │   │   ├── ./public/assets/products/product-41.jpg
│   │   │   ├── ./public/assets/products/product-42.jpg
│   │   │   ├── ./public/assets/products/product-43.jpg
│   │   │   ├── ./public/assets/products/product-44.jpg
│   │   │   ├── ./public/assets/products/product-45.jpg
│   │   │   ├── ./public/assets/products/product-46.jpg
│   │   │   ├── ./public/assets/products/product-47.jpg
│   │   │   ├── ./public/assets/products/product-48.jpg
│   │   │   ├── ./public/assets/products/product-49.jpg
│   │   │   ├── ./public/assets/products/product-5.jpg
│   │   │   ├── ./public/assets/products/product-50.jpg
│   │   │   ├── ./public/assets/products/product-51.jpg
│   │   │   ├── ./public/assets/products/product-52.jpg
│   │   │   ├── ./public/assets/products/product-53.jpg
│   │   │   ├── ./public/assets/products/product-54.jpg
│   │   │   ├── ./public/assets/products/product-55.jpg
│   │   │   ├── ./public/assets/products/product-56.jpg
│   │   │   ├── ./public/assets/products/product-57.jpg
│   │   │   ├── ./public/assets/products/product-58.jpg
│   │   │   ├── ./public/assets/products/product-59.jpg
│   │   │   ├── ./public/assets/products/product-6.jpg
│   │   │   ├── ./public/assets/products/product-60.jpg
│   │   │   ├── ./public/assets/products/product-61.jpg
│   │   │   ├── ./public/assets/products/product-62.jpg
│   │   │   ├── ./public/assets/products/product-63.jpg
│   │   │   ├── ./public/assets/products/product-64.jpg
│   │   │   ├── ./public/assets/products/product-65.jpg
│   │   │   ├── ./public/assets/products/product-66.jpg
│   │   │   ├── ./public/assets/products/product-67.jpg
│   │   │   ├── ./public/assets/products/product-68.jpg
│   │   │   ├── ./public/assets/products/product-69.jpg
│   │   │   ├── ./public/assets/products/product-7.jpg
│   │   │   ├── ./public/assets/products/product-70.jpg
│   │   │   ├── ./public/assets/products/product-71.jpg
│   │   │   ├── ./public/assets/products/product-72.jpg
│   │   │   ├── ./public/assets/products/product-8.jpg
│   │   │   └── ./public/assets/products/product-9.jpg
│   │   ├── ./public/assets/promo-banner-1.webp
│   │   ├── ./public/assets/promo-banner-2.webp
│   │   ├── ./public/assets/promo-banner-3.webp
│   │   ├── ./public/assets/promo-banner-4.webp
│   │   ├── ./public/assets/return.svg
│   │   ├── ./public/assets/reward-purchase-new.png
│   │   ├── ./public/assets/rocky_linux.svg
│   │   ├── ./public/assets/secure.svg
│   │   ├── ./public/assets/singapore.jpg
│   │   ├── ./public/assets/spice-up-your-life.webp
│   │   ├── ./public/assets/success_15690318.png
│   │   ├── ./public/assets/tatoo.webp
│   │   ├── ./public/assets/thanks.webp
│   │   ├── ./public/assets/thanksgiving-day-49f9cf01b226fe60d6e5d076abe92ad6.webp
│   │   ├── ./public/assets/thumbnail-1.webp
│   │   ├── ./public/assets/thumbnail-2.webp
│   │   ├── ./public/assets/thumbnail-3.webp
│   │   ├── ./public/assets/thumbnail-4.webp
│   │   ├── ./public/assets/thumbnail-5.webp
│   │   ├── ./public/assets/trafficvina.png
│   │   ├── ./public/assets/ubuntu.svg
│   │   ├── ./public/assets/us.png
│   │   ├── ./public/assets/vehicles.webp
│   │   ├── ./public/assets/verified_6764458.png
│   │   ├── ./public/assets/versace.svg
│   │   ├── ./public/assets/veteran.webp
│   │   ├── ./public/assets/viking-1.webp
│   │   ├── ./public/assets/viking-2.webp
│   │   ├── ./public/assets/vikings.webp
│   │   ├── ./public/assets/vn.png
│   │   ├── ./public/assets/vnpay-logo.svg
│   │   ├── ./public/assets/vps-amd.png
│   │   ├── ./public/assets/vps-intel.png
│   │   ├── ./public/assets/windows_server.svg
│   │   └── ./public/assets/worldwide.svg
│   ├── ./public/favicon.ico
│   ├── ./public/locales
│   │   ├── ./public/locales/en
│   │   │   ├── ./public/locales/en/common.json
│   │   │   ├── ./public/locales/en/footer.json
│   │   │   ├── ./public/locales/en/header.json
│   │   │   └── ./public/locales/en/home.json
│   │   └── ./public/locales/vi
│   │       ├── ./public/locales/vi/common.json
│   │       ├── ./public/locales/vi/footer.json
│   │       ├── ./public/locales/vi/header.json
│   │       └── ./public/locales/vi/home.json
│   ├── ./public/logo.png
│   ├── ./public/screenshots
│   │   ├── ./public/screenshots/homepage.png
│   │   └── ./public/screenshots/products.png
│   └── ./public/video
│       ├── ./public/video/cyo-video.mp4
│       ├── ./public/video/mockup-1763312874740.mp4
│       ├── ./public/video/mockup-1763313863119.mp4
│       └── ./public/video/videoframe_2926.png
├── ./renovate.json
├── ./src
│   ├── ./src/components
│   │   ├── ./src/components/RegionSelector.tsx
│   │   ├── ./src/components/footer
│   │   │   └── ./src/components/footer/Footer.tsx
│   │   ├── ./src/components/header
│   │   │   ├── ./src/components/header/Header.tsx
│   │   │   ├── ./src/components/header/LocaleSelector.tsx
│   │   │   ├── ./src/components/header/MegaMenu.tsx
│   │   │   ├── ./src/components/header/Search.tsx
│   │   │   ├── ./src/components/header/SideBar.tsx
│   │   │   └── ./src/components/header/TopBar.tsx
│   │   ├── ./src/components/home
│   │   │   ├── ./src/components/home/Search.tsx
│   │   │   └── ./src/components/home/index.tsx
│   │   ├── ./src/components/index.ts
│   │   ├── ./src/components/service
│   │   │   ├── ./src/components/service/componenFour.tsx
│   │   │   ├── ./src/components/service/componentEight.tsx
│   │   │   ├── ./src/components/service/componentFive.tsx
│   │   │   ├── ./src/components/service/componentNine.tsx
│   │   │   ├── ./src/components/service/componentSeven.tsx
│   │   │   ├── ./src/components/service/componentSix.tsx
│   │   │   ├── ./src/components/service/componentThree.tsx
│   │   │   ├── ./src/components/service/componentTwo.tsx
│   │   │   ├── ./src/components/service/componetFirst.tsx
│   │   │   └── ./src/components/service/tab1.tsx
│   │   ├── ./src/components/ui
│   │   │   ├── ./src/components/ui/Accordion.tsx
│   │   │   ├── ./src/components/ui/Listbox.tsx
│   │   │   ├── ./src/components/ui/Pagination.tsx
│   │   │   ├── ./src/components/ui/Rating.tsx
│   │   │   ├── ./src/components/ui/app-sidebar.tsx
│   │   │   ├── ./src/components/ui/avatar.tsx
│   │   │   ├── ./src/components/ui/breadcrumb.tsx
│   │   │   ├── ./src/components/ui/button.tsx
│   │   │   ├── ./src/components/ui/card.tsx
│   │   │   ├── ./src/components/ui/carousel.tsx
│   │   │   ├── ./src/components/ui/checkbox.tsx
│   │   │   ├── ./src/components/ui/collapsible.tsx
│   │   │   ├── ./src/components/ui/dialog.tsx
│   │   │   ├── ./src/components/ui/drawer.tsx
│   │   │   ├── ./src/components/ui/dropdown-menu.tsx
│   │   │   ├── ./src/components/ui/index.ts
│   │   │   ├── ./src/components/ui/input-group.tsx
│   │   │   ├── ./src/components/ui/input.tsx
│   │   │   ├── ./src/components/ui/label.tsx
│   │   │   ├── ./src/components/ui/navigation-menu.tsx
│   │   │   ├── ./src/components/ui/popover.tsx
│   │   │   ├── ./src/components/ui/radio-group.tsx
│   │   │   ├── ./src/components/ui/select.tsx
│   │   │   ├── ./src/components/ui/separator.tsx
│   │   │   ├── ./src/components/ui/sheet.tsx
│   │   │   ├── ./src/components/ui/sidebar.tsx
│   │   │   ├── ./src/components/ui/skeleton.tsx
│   │   │   ├── ./src/components/ui/slider.tsx
│   │   │   ├── ./src/components/ui/table.tsx
│   │   │   ├── ./src/components/ui/tabs.tsx
│   │   │   ├── ./src/components/ui/textarea.tsx
│   │   │   ├── ./src/components/ui/toggle-group.tsx
│   │   │   ├── ./src/components/ui/toggle.tsx
│   │   │   └── ./src/components/ui/tooltip.tsx
│   │   └── ./src/components/useAllPage
│   │       └── ./src/components/useAllPage/index.tsx
│   ├── ./src/data
│   │   ├── ./src/data/collections.ts
│   │   ├── ./src/data/index.ts
│   │   └── ./src/data/products.ts
│   ├── ./src/env
│   │   ├── ./src/env/client.mjs
│   │   ├── ./src/env/schema.mjs
│   │   └── ./src/env/server.mjs
│   ├── ./src/hooks
│   │   ├── ./src/hooks/index.ts
│   │   ├── ./src/hooks/use-mobile.tsx
│   │   ├── ./src/hooks/useMultipleStep.tsx
│   │   ├── ./src/hooks/usePagination.ts
│   │   └── ./src/hooks/useQuery.ts
│   ├── ./src/layouts
│   │   ├── ./src/layouts/PrimaryLayout.tsx
│   │   └── ./src/layouts/index.ts
│   ├── ./src/lib
│   │   ├── ./src/lib/config.ts
│   │   ├── ./src/lib/medusaClient.ts
│   │   ├── ./src/lib/strapi-client.ts
│   │   └── ./src/lib/utils.ts
│   ├── ./src/pages
│   │   ├── ./src/pages/_app.tsx
│   │   ├── ./src/pages/_document.tsx
│   │   ├── ./src/pages/account
│   │   │   ├── ./src/pages/account/action-history.tsx
│   │   │   ├── ./src/pages/account/change-password.tsx
│   │   │   ├── ./src/pages/account/history
│   │   │   │   └── ./src/pages/account/history/index.tsx
│   │   │   ├── ./src/pages/account/info.tsx
│   │   │   ├── ./src/pages/account/invoice
│   │   │   │   └── ./src/pages/account/invoice/[...slug]
│   │   │   │       └── ./src/pages/account/invoice/[...slug]/index.tsx
│   │   │   ├── ./src/pages/account/service
│   │   │   │   └── ./src/pages/account/service/index.tsx
│   │   │   └── ./src/pages/account/support
│   │   │       ├── ./src/pages/account/support/create-tickets.tsx
│   │   │       └── ./src/pages/account/support/my-tickets.tsx
│   │   ├── ./src/pages/api
│   │   │   ├── ./src/pages/api/cart
│   │   │   │   └── ./src/pages/api/cart/create.ts
│   │   │   └── ./src/pages/api/trpc
│   │   │       └── ./src/pages/api/trpc/[trpc].ts
│   │   ├── ./src/pages/index.tsx
│   │   └── ./src/pages/my-services
│   │       └── ./src/pages/my-services/index.tsx
│   ├── ./src/server
│   │   ├── ./src/server/api
│   │   │   ├── ./src/server/api/root.ts
│   │   │   ├── ./src/server/api/routers
│   │   │   │   ├── ./src/server/api/routers/blog.ts
│   │   │   │   └── ./src/server/api/routers/medusa
│   │   │   │       ├── ./src/server/api/routers/medusa/campaign.ts
│   │   │   │       ├── ./src/server/api/routers/medusa/cart.ts
│   │   │   │       ├── ./src/server/api/routers/medusa/categories.ts
│   │   │   │       ├── ./src/server/api/routers/medusa/collection.ts
│   │   │   │       ├── ./src/server/api/routers/medusa/index.ts
│   │   │   │       ├── ./src/server/api/routers/medusa/product.ts
│   │   │   │       ├── ./src/server/api/routers/medusa/region.ts
│   │   │   │       ├── ./src/server/api/routers/medusa/shipping.ts
│   │   │   │       └── ./src/server/api/routers/medusa/user.ts
│   │   │   └── ./src/server/api/trpc.ts
│   │   ├── ./src/server/auth.ts
│   │   └── ./src/server/prisma.ts
│   ├── ./src/styles
│   │   └── ./src/styles/globals.css
│   ├── ./src/types
│   │   ├── ./src/types/index.ts
│   │   └── ./src/types/react-i18next.d.ts
│   └── ./src/utils
│       ├── ./src/utils/api.ts
│       └── ./src/utils/index.ts
├── ./tailwind.config.js
├── ./tsconfig.json
├── ./tsconfig.tsbuildinfo
├── ./webpack.config.js
├── ./wrangler.jsonc
└── ./wrangler.toml