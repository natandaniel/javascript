## The `<script>` Tag

The `<script>` tag is used to embed or reference JavaScript code within an HTML document. It is automatically executed when the browser processes the tag.

### Key Points

- **Inline Scripts**: JavaScript code can be written directly within the `<script>` tag.

  ```html
  <script>
    alert("Hello, world!");
  </script>
  ```

- **External Scripts**: For larger scripts, use the `src` attribute to link to an external JavaScript file.

  ```html
  <script src="path/to/script.js"></script>
  ```

- **Attributes**:
  - `src`: Specifies the URL of an external script file. If set, the inline script content is ignored.
  - `type`: Historically used to specify the scripting language, but is no longer necessary for JavaScript.
  - `async` and `defer`: Control the loading and execution of external scripts.

### Placement in HTML

- **Head Section**: Scripts that need to be loaded before the page content can be placed in the `<head>` section. Use the `defer` attribute to ensure they execute after the document is parsed.

  ```html
  <head>
    <script src="head-script.js" defer></script>
  </head>
  ```

- **Body Section**: Scripts are often placed at the end of the `<body>` section to ensure that the HTML content is fully loaded before the script runs.
  ```html
  <body>
    <!-- Page content -->
    <script src="body-script.js"></script>
  </body>
  ```
