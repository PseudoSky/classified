# classified

## Summary

This was something I mocked up in ~ 1 hour for a group project. The goal was to create an app that shows you the majors and minors at CMU that you're closest to acheiving.

I scraped and parsed the data from the following systems, authenticating protected apps using SAML2 SSO to get through CMU's WebISO wall / Shibboleth.
See

https://github.com/PseudoSky/cmu_scraper


## Problem

Although CMU is one of the top tech schools in the US* (says people that go here), our systems that help students register are hard to use.
There are a few major problems, the first being:
To actually plan your schedule in order to graduate you need to use all of these applications simultaneously.

SOC
Schedule of courses. The only place where you can search courses by more than exact name and time.

Academic Audit
The application that tells you what your outstanding requirements are for any given degree. IE: what courses you've taken complete your gen. ed., major requirements, your gpa... etc.

SIO
The schedule planning system where you add your courses by number to your semester schedule. Then when it is your turn to register, you Wake up and click register for each class and hope you get in... If not, you might have to replan your schedule... major... and whole life.

Course Catalog
Like the academic audit, but shows all of each majors requirements rather than just those you fulfil. Each college writes these by hand in HTML with different hierarchical structure.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


