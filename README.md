1. Install ngrx

    ``` npm install @ngrx/store --save ```
2. Show example with counter

    ```
    a. Create +state folder
    b. Create reducer, selectors and actions folders
    c. Create increment and decrement actions
    d. Create counter reducer
    e. Set up the app module store reducers: StoreModule.forRoot({ count: counterReducer })
    i. Add increment and decrement buttons to app component
    j. Install devtools
    u. Show that state changes when clicking
    p. Implement count displaying on the app component
    k. Add selector 
        createSelector((state: { count: CounterState }) => state.count, state => state.count)
    g. Show how to pass the params to the actions
    ```
3. Rewrite user list service using the ngrx
    
   ```
   a. Tell the problem of user list service
   b. Copy state to user module
   c. Create addUser action, userReducer, userListSelector
   d. Add feature: StoreModule.forFeature('user', userReducer)
   e. Add Dispatch addUser in AdminComponent when adding a user
   f. Add getting users via async pipe inside user list.
   h. Add get user by id selector
   k. Implement filter change subject
   j. Remove user data service
   m. Implement saving user-list to localstorage: ngrx-store-localstorage
   l. Implement rehydrate
   ```
4. Implement effects

   ```
   a. Install effects: npm install @ngrx/effects --save
   b. Create user effect
   c. Implement logger effect to add user action
   d. Add snakbar to effect
   ```
5. Tell them the task for moving current user logic to ngrx
6. Tell them the task for adding effect for logging adding user to the chat
    
