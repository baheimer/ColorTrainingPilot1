// This is a simple demo script, feel free to edit or delete it
// Find a tutorial and the list of available elements at:
// https://www.pcibex.net/documentation/
PennController.ResetPrefix(null) // Shorten command names (keep this line here)


//Sequence("intro","instructions","audio","storyquestions","questions",SendResults(),"exit","bye")
Sequence("intro","storyquestions","questions",SendResults(),"bye")


// What is in Header happens at the beginning of every single trial
Header(
    // We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
        .global()
    ,
    // Delay of 250ms before every trial
    newTimer(250)
        .start()
        .wait()
)
//.log("Name", getVar("ParticipantName") )

// "intro" trial
newTrial( "intro",
    newText("<p>This experiment is part of an ongoing research program at Johns Hopkins University and has been approved by the Johns Hopkins Institutional Review Board. Please read the consent form for additional information. By agreeing to this survey, you acknowledge that you have read the form, are participating voluntarily, and are 18 years of age or older.</p>")
        .settings.css("font-size","12px")
        .print()
    ,
    newText("<a href='https://www.dropbox.com/s/c2zbtvyhggpxqm2/behav%20consent_sighted.pdf?dl=0' target='_blank'>Click here for consent form</a>")
        .print()
    ,
    
    // NEED TO ADD SCREENING INFO COLLECTION(?)
    
    /*newTextInput()
        .print()
        .wait()                 // The next command won't be executed until Enter is pressed
        .setVar( "ParticipantName" )
        // This setVar command stores the value from the TextInput element into the Var element
    ,*/
    newText("Continuing with the survey indicates your consent to participate.")
        .settings.css("margin-top","10px") 
        .settings.css("margin-bottom","10px") 
        .print()
    ,
    newButton("proceed","Click here to proceed")
        .print()
        .wait()
)

// "instructions" trial
newTrial("instructions",
    newText("In this task, you're going to hear a story about a made up land and the creatures that live there.")
        .settings.css("margin-bottom","10px") 
        .print()
    ,
    newText("You will hear a chunk of the story on each screen. Once you get to the end of the story, you will be asked a series of questions about what you heard. Please listen closely to the story.")
        .settings.css("margin-bottom","10px") 
        .print()
    ,
    newText("Press any key to begin")
        .italic()
        .bold()
        .print()
    ,
    newKey("")
        .wait()    
)

// "audio" trials
Template("audio.csv", variable =>
    newTrial("audio",
        newAudio("aud",variable.audio_name)
            .play()
            .wait()
        ,
        newText("Press any key to continue")
                .italic()
                .bold()
                .settings.css("margin-top","10px") 
                .print()
            ,
        newKey("")
            .wait()
    )
)

// "storyquestions" trial
newTrial("storyquestions",
    newText("q1","What is the name of the land where all the dragons live?")
        .bold()
        .print()
    ,
    newText("1a","a. Torthica")
        .print()
    ,
    newText("1b","b. Alvardia")
        .print()
    ,
    newText("1c","c. Poluff")
        .print()
    ,
    newText("1d","d. Ayotope")
        .print()
    ,
    newSelector()
        .add(getText("1a"),getText("1b"),getText("1c"),getText("1d"))
        .log()
        .wait()
    ,
   getText("q1").remove(), getText("1a").remove(), getText("1b").remove(), getText("1c").remove(), getText("1d").remove(),
   
    newText("q2","What type of school is Zaluti?")
        .bold()
        .print()
    ,
    newText("2a","a. Elementary school")
        .print()
    ,
    newText("2b","b. Middle school")
        .print()
    ,
    newText("2c","c. High School")
        .print()
    ,
    newText("2d","d. University")
        .print()
    ,
    newSelector()
        .add(getText("2a"),getText("2b"),getText("2c"),getText("2d"))
        .log()
        .wait()
    ,
    getText("q2").remove(), getText("2a").remove(), getText("2b").remove(), getText("2c").remove(), getText("2d").remove(),
    
    newText("q3","Where do Zaluti students live?")
        .bold()
        .print()
    ,
    newText("3a","a. Caves in groups of 3")
        .print()
    ,
    newText("3b","b. Caves in groups of 4")
        .print()
    ,
    newText("3c","c. Treetops in groups of 3")
        .print()
    ,
    newText("3d","d. Treetops in groups of 4")
        .print()
    ,
    newSelector()
        .add(getText("3a"),getText("3b"),getText("3c"),getText("3d"))
        .log()
        .wait()
    ,
    
    newText("Press any key to continue")
        .italic()
        .bold()
        .settings.css("margin-top","10px") 
        .print()
    ,
    newKey("")
        .wait()
)

// "questions" trials
Template("dragons.csv",row => 
    newTrial("questions",
        newText(row.Reminder)
            //.italic()
            .settings.css("margin-bottom","10px") 
            .print()
        ,
        newText("press","Press any key to continue")
            .italic()
            .bold()
            .settings.css("margin-top","10px") 
            .print()
        ,
        newKey("")
            .wait()
        ,
        getText("press").remove(),
        
        newText("q1",row.Q1)
            .bold()
            .print()
        ,
        newText("1a",row.A1a)
            .print()
        ,
        newText("1b",row.A1b)
            .print()
        ,
        newText("1c",row.A1c)
            .print()
        ,
        newText("1d",row.A1d)
            .print()
        ,
        newSelector()
            .add(getText("1a"),getText("1b"),getText("1c"),getText("1d"))
            .log()
            .wait()
        ,
        getText("q1").remove(), getText("1a").remove(), getText("1b").remove(), getText("1c").remove(), getText("1d").remove(),
        
        newText("q2",row.Q2)
            .bold()
            .print()
        ,
        newText("2a",row.A2a)
            .print()
        ,
        newText("2b",row.A2b)
            .print()
        ,
        newText("2c",row.A2c)
            .print()
        ,
        newText("2d",row.A2d)
            .print()
        ,
        newSelector()
            .add(getText("2a"),getText("2b"),getText("2c"),getText("2d"))
            .log()
            .wait()
        ,
        getText("q2").remove(), getText("2a").remove(), getText("2b").remove(), getText("2c").remove(), getText("2d").remove(),
        
        newText("q3",row.Q3)
            .bold()
            .print()
        ,
        newText("3a",row.A3a)
            .print()
        ,
        newText("3b",row.A3b)
            .print()
        ,
        newText("3c",row.A3c)
            .print()
        ,
        newText("3d",row.A3d)
            .print()
        ,
        newSelector()
            .add(getText("3a"),getText("3b"),getText("3c"),getText("3d"))
            .log()
            .wait()
        ,
        getText("q3").remove(), getText("3a").remove(), getText("3b").remove(), getText("3c").remove(), getText("3d").remove(),
        
        newText("q4",row.Q4)
            .bold()
            .print()
        ,
        newText("4a",row.A4a)
            .print()
        ,
        newText("4b",row.A4b)
            .print()
        ,
        newText("4c",row.A4c)
            .print()
        ,
        newText("4d",row.A4d)
            .print()
        ,
        newSelector()
            .add(getText("4a"),getText("4b"),getText("4c"),getText("4d"))
            .log()
            .wait()
        ,
        getText("q4").remove(), getText("4a").remove(), getText("4b").remove(), getText("4c").remove(), getText("4d").remove(),
        
        newText("q5",row.Q5)
            .bold()
            .print()
        ,
        newText("5a",row.A5a)
            .print()
        ,
        newText("5b",row.A5b)
            .print()
        ,
        newText("5c",row.A5c)
            .print()
        ,
        newText("5d",row.A5d)
            .print()
        ,
        newSelector()
            .add(getText("5a"),getText("5b"),getText("5c"),getText("5d"))
            .log()
            .wait()
    )
    .log("Dragon",row.Dragon_Name)
)

// "bye" trial
newTrial("bye",
    newText("Thank you for your participation!")
        .print()
    ,
    newButton()
        .wait()  // Wait for a click on a non-displayed button = wait here forever
)
.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial
