Roadmap 5. Dependency injection
1.	Create user module

    a.	Move content from app component to the user-list component
    b.	Move badge component to the user module
    c.	Add routing
        i.	Create simple user-list route
        ii.	Tell about router outlet
    d.	Create admin lazy loaded module
        i.	Add header with links to user-list and admin components
        ii.	Show the chunk loading
2.	Move user loading to the particular user-data-service inside the user module and use it for loading the users, userList inside the service

    a.	Show how to debug in chrome
    b.	Tell about difference between the provideIn: root and module providers
        i.	Show that we can also inject service by providers not just by root
        ii.	Show that service doesn’t work if we don’t provide it anywhere
        iii.	Provide logger service inside the badge component providers and show that it is a diff services
    c.	Inject user-data-service to app module and show that is is working there
        i.	Tell about root injector
3.	Inject user-list-service to admin-lazy-load module

    a.	Show that it is a different services
    b.	Refactor user-module to using forRoot, forChild approach
4.	Create logger service

    a.	Add logger level to app module
    b.	Show that it injects by default
    c.	Do not provide it inside app module use Optional
5.	Create DBLogger service
6.	Inject it instead of the LoggerService
7.	Create an alias of the LoggerService OldLoggerService (userExisting)
8.	Refactor logger service to CONSOLE Logger service
9.	Create factory from url which recognize which logger should be used
10.	Create possibilities to use all loggers, tell about multy: true
11.	Describe the task what they should do
12.	Give the code to the students

**13.	Additionally they can create the localStorage service and save/get the users data there**

**14.	Additionally they can create the cookie storage**

**15.	Additionally they can switch between cookie storage and localStorage using the factory by query parameter**
