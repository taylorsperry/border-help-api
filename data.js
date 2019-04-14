const intro = [
  { 
    para: "U.S. Customs and Border Protection (CBP), the federal agency tasked with patrolling the U.S. border and areas that function like a border, claims a broader scope of authority within 100 miles of a U.S. border or coastline (the 'Border Zone')."
  },
  { 
    para: "However, the Fourth Amendment to the U.S. Constitution protects against arbitrary searches and seizures of people and their property, even in this expanded border area. As a general matter, CBP agents' jurisdiction extends only to immigration violations and federal crimes. And, depending where you are in this area and how long an agent detains you, agents must have varying levels of suspicion to hold you."
  },
]

const rights = [
  { 
    id: 1, 
    title: "You have the right to remain silent", 
    detail: [
      {
        para: "You have the right to remain silent or tell the agent that you will only answer questions in the presence of an attorney, no matter your citizenship or immigration status. You do not have to answer questions about your immigration status. You may simply say that you do not with to answer those questions for longer."
      },
      {
        para: "Your silence alone is not enough to support probable cause or reasonable suspicion to arrest, detain, or search you or your belongings."
      },
      {
        para: "For people who do not have permission to be in the U.S. for a specific reason and for, usually, a limited amount of time (a 'nonimmigrant' on a visa, for example), the law does require you to provide information about your immigration status if asked. If you want to know whether you fall into this category, you should consult an attorney."
      }
    ]
  },
  {
    id: 2,
    title: "You cannot be detained without 'reasonable suspicion'",
    detail: [
      {
        para: "Generally, an immigration officer cannot detain you without 'reasonable suspicion.' Reasonable suspicion is much less robust than probable cause, but it is certainly not just a hunch or gut feeling. An agent must have specific facts about you that make it reasonable to believe you are committing or committed a violation of immigration or federal law."
      },
      { 
        para: "If an agent detains you, you can ask for their basis of reasonable suspicion, and they should tell you."
      },
    ]
  },
  {
    id: 3,
    title: "You cannot be searched without 'probable cause' or your consent",
    detail: [
      {
        para: "If an agent asks you if they can search your belongings, you can say no. Your race or ethnicity alone do not suffice for either probable cause or reasonable suspicion."
      }
    ]
  },
  {
    id: 4,
    title: "You cannot be arrested without 'probable cause'",
    detail: [
      {
        para: "The agent must have facts about you that make it probable that you are committing, or committed, a violation of immigration law or federal law."
      },
      {
        para: "Your silence alone does not meet probable cause. Your race or ethnicity alone do not suffice for either probable cause or reasonable suspicion."
      }
    ]
  }
]

const scenarios = [
  { 
    id: "a", 
    title: "You are asked for documents", 
    detail: [
      {
        para: "If an agent asks you for documents, what you need to provide depends on your immigration status. U.S. citizens do not have to carry proof of citizenship on their person if they are in the United States."
      },
      {
        para: "If you have valid immigration documents and are over the age of 18, the law does require you to carry those documents on you. If you are asked to produce them, it is advisable that you do so, or you risk being arrested."
      },
      {
        para: "If you are an immigrant without documents, you can decline the officer's request. An agent may likely ask you more questions if you decline a request."
      },
      {
        para: "No matter what category you fall into, never provide false documents to an immigration official."
      }
    ]
  },
  {
    id: "b",
    title: "You are stopped on a bus or a train",
    detail: [
      {
        para: "An officer may board a bus or train to ask passengers about their immigration status. Although these situations are scary, and it may seem a CBP agent is giving you an order when he asks you questions, you are not required to answer and simply say you do not wish to do so. As always, you have the right to remain silent."
      },
      {
        para: "If an agent persists in asking you questions, you should ask if you are being detained. You may ask, 'Am I free to leave?' If the agent says 'No' and wishes to detain you, he must have reasonable suspicion that you committed an immigration violation. You may ask the agent for their basis for detaining you, and they should tell you."
      },
      { 
        para: "The longer CBP detains you, the more suspicion they need. Eventually they will need probable cause. If the agent arrests or searchs the interior of your belongings, you can ask the agent to tell you their basis for probable cause, and the should be able to articulate their suspicion."
      }
    ]
  },
  {
    id: "c",
    title: "You are stopped in a car",
    detail: [
      {
        para: "The Supreme Court requires officials to have reasonable suspicion that the driver or passengers committed an immigration violation or a federal crime. If you're pulled over, an agent's questions should be limited to the purpose of the stop. Any arrest or prolonged questioning requires probable cause."
      },
      {
        para: "You may ask the agent for their basis for probable cause, and they should tell you. Both the driver and the passengers have the right to remain silent and not answer questions about their immigration status."
      }
    ]
  }
]

const help = [
  {
    id: "help1",
    title: "Freedom for Immigrants",
    detail: [
      {
        para: "If someone you know has been detained, contact the Freedom for Immigrants hotline",
      },
      {
        para: "https://www.freedomforimmigrants.org/hotline"
      }
    ]
  }
]

module.exports = {intro, rights, scenarios, help} 