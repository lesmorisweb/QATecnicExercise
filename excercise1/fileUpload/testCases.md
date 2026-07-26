# Module: File Upload

---

## FU_TC_001 - Upload a Valid File Successfully

| Field | Value |
|-------|-------|
| **ID** | FU_TC_001 |
| **Priority** | High |
| **Type** | Positive |
| **Related Scenario** | FU_SC_001 - Upload a valid file successfully |

### Objective

Verify that the application successfully uploads a valid file.

### Preconditions

- The user is on the **File Upload** page.
- A valid file is available on the local machine.

### Test Data

| File |
|------|
| `sample.pdf` |

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click **Choose File**. | The file explorer opens. |
| 2 | Select a valid file. | The selected filename is displayed. |
| 3 | Click **Upload**. | The upload process starts. |
| 4 | Verify the result page. | The upload is successful and the uploaded filename is displayed. |

### Expected Result

✅ The selected file is uploaded successfully, and its filename is displayed on the confirmation page.

---

## FU_TC_002 - Select a File Before Uploading

| Field | Value |
|-------|-------|
| **ID** | FU_TC_002 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | FU_SC_002 - Select a file before uploading |

### Objective

Verify that selecting a file updates the file input field correctly.

### Preconditions

- The user is on the **File Upload** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Click **Choose File**. | The file explorer opens. |
| 2 | Select a valid file. | The filename is displayed in the file input control. |

### Expected Result

✅The selected filename is displayed before the upload is performed.

---

## FU_TC_003 - Upload Without Selecting a File

| Field | Value |
|-------|-------|
| **ID** | FU_TC_003 |
| **Priority** | High |
| **Type** | Negative / Validation |
| **Related Scenario** | FU_SC_003 - Upload without selecting a file |

### Objective

Verify the application behavior when the user attempts to upload without selecting a file.

### Preconditions

- The user is on the **File Upload** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Do not select any file. | No file is selected. |
| 2 | Click **Upload**. | The upload should be rejected. |
| 3 | Verify the response. | A user-friendly validation message should be displayed indicating that a file is required. |

### Expected Result

> **Execution Result:** ❌ Failed  
> **Linked Bug:** [BUG](/fileUpload/bug.md)


---

## FU_TC_004 - Replace Selected File Before Uploading

| Field | Value |
|-------|-------|
| **ID** | FU_TC_004 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | FU_SC_004 - Replace selected file before uploading |

### Objective

Verify that selecting another file replaces the previously selected file.

### Preconditions

- The user is on the **File Upload** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Select File A. | File A is displayed in the file input. |
| 2 | Click **Choose File** again. | The file explorer opens. |
| 3 | Select File B. | File B replaces File A in the file input. |
| 4 | Click **Upload**. | File B is uploaded successfully. |

### Expected Result

✅ The most recently selected file is uploaded.

---

## FU_TC_005 - Navigate Back After Upload

| Field | Value |
|-------|-------|
| **ID** | FU_TC_005 |
| **Priority** | Low |
| **Type** | Navigation |
| **Related Scenario** | FU_SC_005 - Navigate back after successful upload |

### Objective

Verify the application behavior when navigating back after a successful upload.

### Preconditions

- A file has been uploaded successfully.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Upload a valid file. | Upload completes successfully. |
| 2 | Click the browser **Back** button. | The File Upload page is displayed. |
| 3 | Verify the page. | The page is displayed correctly and remains functional. |
| 4 | Verify the selected file. | The previously selected filename is still displayed in the file input. |

### Expected Result

✅ The page remains usable after navigating back, preserving the selected filename.

---

## FU_TC_006 - Refresh After Successful Upload

| Field | Value |
|-------|-------|
| **ID** | FU_TC_006 |
| **Priority** | Low |
| **Type** | Navigation |
| **Related Scenario** | FU_SC_006 - Refresh after successful upload |

### Objective

Verify the application state after refreshing the page following a successful upload.

### Preconditions

- A file has been uploaded successfully.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Upload a valid file. | Upload completes successfully. |
| 2 | Refresh the browser. | The page reloads successfully. |
| 3 | Verify the page. | The application remains in a valid state and allows a new upload. |

### Expected Result

✅ Refreshing the page does not leave the application in an inconsistent state.

---

## FU_TC_007 - Validate Single File Upload Limitation

| Field | Value |
|-------|-------|
| **ID** | FU_TC_007 |
| **Priority** | Medium |
| **Type** | Functional |
| **Related Scenario** | FU_SC_007 - Validate single file upload limitation |

### Objective

Verify the application behavior when attempting to select multiple files.

### Preconditions

- The user is on the **File Upload** page.

### Test Steps

| Step | Action | Expected Result |
|------|--------|----------------|
| 1 | Open the file selector. | The file explorer opens. |
| 2 | Attempt to select multiple files. | The application accepts only the supported number of files. |
| 3 | Verify the selected files. | Only one file is selected, and no unexpected behavior occurs. |

### Expected Result

✅ The application enforces the supported upload limit and continues functioning correctly.