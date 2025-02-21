# Working With Records Using Base Components

Base Components provide a UI to view, create, and edit records – similar to the record detail page in Salesforce. 
To create forms that let users view, edit, and create Salesforce records, use the 
1. Lightning-record-form – Supports edit, view, and read-only modes. 
2. Lightning-record-edit-form – Displays an editable form. 
3. Lightning-record-view-form – Displays a read-only form. 
4. Lightning-record-* - implements Lightning Data Service and **doesn’t require additional Apex controllers to create or edit record data**. It also takes care of field-level security and sharing for you, so users see only the data that they have access to

**LDS Base Component**
   
![image](https://github.com/user-attachments/assets/fb2f0a92-fd1c-4d96-8424-c0546acf4e9f)

**Record Form**

1. Qucikly create forms to **add, view, or update a record.**
2. Create record forms is easier than building form manually.
3. The **object-api-name attribute** always required, and the **record-id** is required when you're editing or viewing a record.
![image](https://github.com/user-attachments/assets/2e2690ee-3f2f-4904-8689-45992a6df3cf)

**Benefits:**
1. Switches between view and edit modes automatically.
2. Provides Cancel & Save buttons automatically in edit forms.
3. Uses object default record layout with multi column support.
4. Loads all fields in the objects compact or full layout, or only fileds specified.

**Limitations:**
Lightning-record-form is less customizable. To customize the form layout or provide custom rendering of record data, use ightning-record-edit-form (add or update a record) and lightning-record-view-from (view a record).

