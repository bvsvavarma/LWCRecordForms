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

**Properties (https://developer.salesforce.com/docs/component-library/bundle/lightning-record-form/specification)**
1. **columns**: Specifies the number of columns for the form.
2. **layout-type**: The type of layout to use to display the form fields. Possible values: Compact, Full.
When creating a new record, only the full layout is supported.
3. **mode**: Specifies the interaction and display style for the form.
   Possible values: view, edit, readonly.
   If a record ID is not provided, the default mode is edit, which displays a form to create new records.
   If a record ID is provided, the **default mode is view**, which displays field values with edit icons on updateable fields.

Additionally, lightning-record-form supports the following custom events.
1. error
2. load
3. submit
4. success



**Record View Form**

![image](https://github.com/user-attachments/assets/5cb89714-4b09-4b7f-810f-fc4cbe09a7af)

1. Form that displays Salesforce record data for specific fields associated with that record.
2. To specify read-only fields, use lightning-output-field components insdide lightning-record-view-form.
3. lightning-record-view-form requires a record ID to display the fields on the record.

**Benefits**
1. Customizing the form layout.
2. Custom rendering of record data.

**Record Edit Form**

![image](https://github.com/user-attachments/assets/101089bb-473f-4427-9457-5f8a6e1ccd59)

1. Use the lightning-record-edit-form component to create a form that's used to add a Salesforce record or update fields in an existing record on an object.
2. To specify editable fields, use lightning-input-field components inside lightning-record-edit-form component.
3. To display record fields as read-only in lightning-record-edit-form, use lightning-output-field components to specify those fields.

**Benefits**
1. Customizing the for layout.
2. Custom rendering of record data.

