Discount Ascii Warehouse
====

Info
----
### Quick guide
- To install dependencies `npm install`, tested on node v6.11.0, npm v3.10.10.
- To build: `npm run build`
- To run in dev: `npm run start`
- To run test: `npm run test`

### How do I start the app?

Start with `node index.js` after build.

Features
----

- Products are displayed in a grid.
- Each product has a "size" field, which is the font-size in pixels. Faces are displayed in their correct size, to give customers a realistic impression of the product.
- Each product has a "price" field, in cents, formatted as dollars like `$3.51`.
- The user can sort the products by "size", "price" or "id" in ascending order.
- The product grid automatically loads more items as you scroll down.
- The product database is under high load due to growing demand for ascii, so an animated "loading..." message is displayed while the user waits.
- The next batch of results is pre-emptively fetched in advance, making use of idle-time. However, they are not be displayed until the user has scrolled to the bottom of the product grid.
- The message "~ end of catalogue ~" is displayed when the user reaches the end.

Products API
----

- Basic query looks like: `/api/products`
- Response format is newline-delimited JSON.
- To get a larger results set use the `limit` parameter, eg: `/api/products?limit=100`
- To paginate results use the `skip` parameter, eg: `/api/products?limit=15&skip=30` (returns 15 results starting from the 30th).
- To sort results use the `sort` parameer, eg: `/api/products?sort=price`. Valid sort values are `price`, `size` and `id`.

Ads
----

- An "advertisement" is inserted after every 20 products. The `?r` query param is randomly generated each time an ad is displayed.
- Ads are randomly selected, but a user must never see the same ad twice in a row.
