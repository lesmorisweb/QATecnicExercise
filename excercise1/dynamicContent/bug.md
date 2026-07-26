# BUG-002 - Dynamic Content changes despite using with_content=static parameter

| Field | Value |
|-------|-------|
| **Module** | Dynamic Content |
| **Type** | Functional |
| **Severity** | Medium |
| **Priority** | Medium |
| **Status** | Open |

## Description

When accessing the Dynamic Content page using the `with_content=static` parameter, the content is expected to remain unchanged after refreshing the page. However, the last content block changes between refreshes.

This behavior is inconsistent with the purpose of the `with_content=static` parameter, which should preserve the displayed content.

## Preconditions

- The user has access to the Dynamic Content module.
- The browser is open.

## Steps to Reproduce

1. Navigate to the following URL:

   `https://the-internet.herokuapp.com/dynamic_content?with_content=static`

2. Observe and record the content displayed on the page.
3. Refresh the browser.
4. Compare the content after the refresh.
5. Repeat the refresh multiple times if necessary.

## Expected Result

All content blocks should remain identical after each page refresh when using the `with_content=static` parameter.

## Actual Result

The last content block changes after refreshing the page, while the other content remains static.

## Evidence

- image-16.png
- image-17.png

## Notes

The issue was reproduced by refreshing the page multiple times with the `with_content=static` parameter enabled.