# hc-event-component

Is a [web-component] built by adhering to the [gold standard].
This component contains all the things that (we think) represent an event.

[web-component]: https://www.webcomponents.org/introduction
[gold standard]: https://github.com/webcomponents/gold-standard/wiki

## What event? 

An event is meant to be a conference, meetup, call for papers,
and alike things. Focus is on the tech and community events, but not exclusively.
Though in doubt decisions need to be taken, decisions are made in favour of tech events.

## How to use?

The plan is to use this web-component like so:
```html
<hc-event>
  <???>tbd</???>
  <address>HolidayCheck Office - Germany, 81673 Munich, Neumarkter Str. 61</address>
  <???>tbd</???>
</hc-event>
```

## Install/setup, via nix - for local development

The project can be built and run locally using nix, to reproduce the environment.
1) Make sure to have nix installed (see [nixos.org/nix][nix]) and then
1) `cd <project-dir>`
1) run `nix-shell` and you should have the environment up and running
1) install all node modules using `npm install`
1) prove that it works, `npm test`
1) now you have a shell with a deterministic environment (incl. node version)

[nix]: http://nixos.org/nix/