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
    <time>2018-06-02 10:00</time> - <time>2018-06-02 18:00</time>
    <hc-event-tags>
      <li>unconference</li>
      <li>open space</li>
      <li>JavaScript</li>
      <li>self organizing</li>
      <li>learning</li>
    </hc-event-tags>
    <address>HolidayCheck Office - Germany, 81673 Munich, Neumarkter Str. 61</address>
    <a href="http://jscraftcamp.org/">JSCraftCamp 2018</a>
    <a href="https://www.twitter.com/jscraftcamp" class="fa fa-twitter"></a>
    <p>
      And maybe some details about the event, or not ...
    </p>
  </hc-event>
```

## How to develop?

Run `npm start` and you can open http://localhost:8989 in your browser where you can see/browse
the files and tests.

## Install/setup, via nix - for local development

The project can be built and run locally using nix, to reproduce the environment.
1) Make sure to have nix installed (see [nixos.org/nix][nix]) and then
1) `cd <project-dir>`
1) run `nix-shell` and you should have the environment up and running
1) install all node modules using `npm install`
1) prove that it works, `npm test`
1) now you have a shell with a deterministic environment (incl. node version)

[nix]: http://nixos.org/nix/

## Goals

Web-components are not the new React components, they are an extension of HTML, and
should be built like that. Which means the [gold standard] is one thing to look at.
In order to make it simpler, think about how can you build a web component that
it is just doing it's job, and would also work in a reasonable fashion
even if the JS class that you build is NOT given. Graceful degredation or progressive enhancement
those are the two things that always come up in my mind (apply the right [mix] of them).

Build a web-component to behave just like you would want HTML to behave. What?
A simple example: the piece of HTML `<some-comp>nothing here</some-comp>` without
a working JS class that "brings the web-component to life" should just not render
any different than `<span>nothing here</span>`. Of course, you say.
Yes, of course. But that also means, that it should not be built like this:
~~`<some-comp content="nothing here"/>`~~ or ~~`<some-comp/><script>someComp.setContent("nothing here")</script>`~~ ... NO NO NO. The latter examples are just useless tag shells, that
don't really make any use of HTML other than seeing them as necessary vehicles to render
something on the screen. Think different!