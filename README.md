Roadmap 6. Pipes and observables
1.	Tell about observables
2.	Show simple example with timer
3.	Show example with keyup event on the input

    a.	Use UPPERCASE
    b.	Filter values
    c.	Show how to catch errors
    d.	Show how to complete
4.	Show how to unsubscribe
5.	Show promise
6.	Use data pipe for users

    a.	Add data field to users list
    b.	Show the data pipe
    c.	Tell about formats
        i.	https://angular.io/api/common/DatePipe
    d.	Tell about timezone
    e.	Tell about locale
        i.	import { registerLocaleData } from '@angular/common';
        ii.	import localeUA from '@angular/common/locales/uk';
        iii.	registerLocaleData(localeUA, 'ua');
    f.	Show how to chain pipes
7.	Tell about uppercase
8.	Tell about lowercase
9.	Tell about titlecase
10.	Tell about currency pipe
11.	Tell about json pipe
12.	Create custom prefix-name pipe
13.	Tell the task

    a.	Create custom badgeText pipe 
        i.	Use it in the list
        ii.	Create service BadgeEnumToString
        iii.	Use it inside the badgeText pipe
    b.	Create observable from input event and use debounce time
