## Roadmap

1.	Create simple list

    a.	Show item index 
    b.	Hide not visible elements
    c.	Add title attribute to the name of the user
    d.	Use switch case for showing the badges
    e.	Show else empty message if the list is empty
    f.	Add selected user by clicking the item
    g.	Change active class of the selected item by class
    h.	Change some style via ngStyle
2.	Display user block info

    a.	Show else message in case there is no selected user
    b.	Tell about as user inside ngIf
3.	Tell about trackBy problem

    a.	Show how list renders with trackBy and without it
4.	Tell about problem with badges we have to copy the view

    a.	Tell about ngTemplateOutlet and show how to use ngTemplateOutlet
    b.	Tell about ngTemplateOutletContext and show how to use it ($implicit)
5.	Use the component for rendering the budges

    a.	Create budge component with status input
6.	Tell about directives how we can change approach with badges
7.	Tell attributive directive

    a.	Tell about new css after/content approach to render the badges
    b.	Create attributive badge directive with status input
8.	Tell about structural directives (*)

    a.	Create structural badge directive
    b.	Tell that ng-template cover the element which directive uses for
    c.	Tell about viewContainerRef, TemplateRef
    d.	Render the BadgeComponent inside the directive as a sibling of li tag
    e.	Change approach with rendering and render it inside the li tab
9.	Show the badges result with all used approaches
10.	Go inside attribute badge directive and tell about HostListener and HostBinding
    
    a.	Show example with isHideBadge by clicking the badge
    b.	Tell about host inside decorator
