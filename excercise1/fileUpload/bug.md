# BUG-1 - Uploading without selecting a file returns an Internal Server Error (HTTP 500)

| Field | Value |
|-------|-------|
| **Module** | File Upload |
| **Type** | Functional / Validation |
| **Severity** | High |
| **Priority** | High |
| **Status** | Open |

## Description

When the user clicks the **Upload** button without selecting a file, the application returns an **Internal Server Error (HTTP 500)** instead of validating the input and displaying a user-friendly error message.

The application should handle missing required input gracefully without exposing a server-side error.

## Preconditions

- The user is on the **File Upload** page.
- No file has been selected.

## Steps to Reproduce

1. Navigate to the **File Upload** page.
2. Do not select any file.
3. Click the **Upload** button.

## Expected Result

The application should prevent the upload and display a validation message indicating that selecting a file is required, and status code 400.

Example:

> "Please select a file before uploading."

No server error should be generated.

## Actual Result

The application returns an **Internal Server Error (HTTP 500)** instead of validating the request, and status code 500

## Evidence

- image-33.png
