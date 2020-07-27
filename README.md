### Study Notes
[Intro to Object Orientation in JavaScript](https://github.com/getfutureproof/fp_guides_wiki/wiki/Object-Orientation)

# Exercises
- Tamagotchi: Create a text-based game in nodejs that enables us to control a pet via user input.
    - Create a new class named Pet. A Pet should have at least three features name, happiness level, hunger level and any more you think are important.
    - Create a function that asks the user for their input. This function should cope with the three following occasions:
        - Creating a new pet and giving it a name and any other features defined.
        - User wants to feed or play with their pet..
        - User wants to check in with their pet and see how it’s happiness and hunger levels are. \
  *Note: These will require you to create methods within your Pet class.*
    - Implement best practice Exceptions Handling
    - How can you make this a more engaging game? What else would be cool for your pet to do? Can the user choose the type of food they feed their pet, with the pet randomly deciding if they like it or not?

*To gather user input, the [`prompt-sync`](https://github.com/heapwolf/prompt-sync#readme) module might come in handy but it is not the only option.*