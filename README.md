## Based on Angular 2 Play


This project is intended to be a playground for feature modules and routing in Angular2.

## Target 02/12/2016:
To achieve following routing:

```
/  -> redirect to 'core'
/login
/core
        /   -> redirect to  'dashboard'
        /dashboard
                      / -> redirect to 'wtf'
                      /wtf
                      /[random] -> redirect to 'wtf'
        /transactions
        /[random] -> redirect to 'dashboard'
/[random] -> redirect to 'core'
```

valid routes:

```
/login
/core/dashboard
/core/dashboard/wtf
/core/transactions
```

Optional: 
* don't have /core in the routes, but load 'dashboard','transactions' as children of CoreModule so that they get rendered insinde CoreComponent ( holds main-layout )

Example:
```
/dashboard to be the /core/dashboard route from above.
```

