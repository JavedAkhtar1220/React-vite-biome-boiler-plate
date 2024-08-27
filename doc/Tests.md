## Where to locate tests

For tests, we create a `__tests__` folder in the same directory as the file we want to test.
The test will have the same name as the file, but with the `.test.js(x)` extension.

## Utils functions

In the case of utils functions, we can test them directly, without the need to render them.
Asserting the functionality of the function is enough. This includes all the utils functions that are not related to the UI such as dates, formats...

## Mocking

### Unit tests, functions, modules

For internal unit test mocking purposes, we use vitest functions (check the guide here: https://vitest.dev/guide/mocking)

### HTTP requests

If you encounter with a component that requires an HTTP request, you can mock the request using the `msw` library.

The MSW handlers (check the docs -> https://mswjs.io/docs/best-practices/structuring-handlers) allows the mocking of the requests and responses, and the tests can be run without the need of a real server.

Handlers and mocks can be found at `src/msw/handlers` and `src/msw/__mocks__` respectively. Don't forget to add the handlers to the `src/msw/handlers.js` handlers array, import your handlers from the `./handlers` folder and add them to the `handlers` array.
