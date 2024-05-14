import styles from "./page.module.css";
import { TextShadow } from "@/components/textShadow/TextShadow";
import { TextButton } from "@/components/textButton/TextButton";
import { Card } from "@/components/card/Card";

const RSVP_LINK = "https://forms.gle/BrtkuYS6Tqhhvi1g8";

const FAQ_CONTENT = [
  [
    "You're doing this outside the US?",
    "I decided to plan an international trip because it's more fun, because I wanted to take people outside of their comfort zone, and because my friends are already all over the place and I would be asking someone to travel no matter what. Also, it's hella expensive to rent a house in the US and honestly overall cheaper to do Peru due to the difference in cost of living."
  ],
  [
    "But why Cusco?",
    "I'm kind of really well traveled, so I think it's pretty noteworthy when I show up somewhere and am blown away by it. Cusco is one of those places! Also, my best friend Tito lives in Peru, and as a result, we have loads of information about the area and can navigate it well. Cusco is really beautiful, there's a lot to do and explore."
  ],
  [
    "When do I need to be there?",
    "The event begins in the evening of September 6th (Friday) and ends in the evening of September 8th (Sunday) in Cusco. That means you should plan on traveling before and after that time block. Obviously if you absolutely have to come for a shorter amount of time, that's fine, but it also probably wouldn't be super worth it to travel so much to be somewhere for less than 48hrs."
  ],
  [
    "How do I get there?",
    "Booking flights to Cusco directly is very expensive. You'll want to search for flights to Lima. Flying from Lima to Cusco is very affordable (typically 50 USD one way) and dozens of flights leave every day. But do be aware to budget a good 3-5 hours to get from Lima to Cusco (it's not down the road!)."
  ],
  [
    "How much is it gonna cost?",
    "I want to make this as financially accessible as possible, so I'm offering to cover most if not all expenses for people other than travel. That means, you just have to worry about showing up! I will attempt to provide food and housing. Airfare to Cusco can be as low as 450 USD (350 to Lima, then 100 to Cusco roundtrip). Please reach out to me if you want help with planning your travel itinerary."
  ],
  [
    "Where are we staying?",
    "I'm planning on renting at least one AirBnB to host people who are coming as well as to serve as an event space. I want to be able to accommodate everyone and make sure they are comfortable, and I will be booking something that typically is 'nicer' that what I would do by myself (since you may know that my standards are somewhat low). If you would like to arrange your own stay, you're obviously welcome to do that, but just reach out to me to make sure it's not too far from where we are staying."
  ],
  [
    "Are we going to Machu Picchu?",
    "Unfortunately, going to Machu Picchu is not part of the itinerary for the trip. Even though it's relatively near Cusco, it actually takes at least a few hours to get there, involving a train ride and then a bus transfer. I want to maximize our time together and also be aware of people's energy since we are already traveling. I'm planning on going to Machu Picchu prior to the official start of the event (see next question!)."
  ],
  [
    "Can I stay longer?",
    "Definitely. I myself will stay for at least a week in Cusco (tentatively Aug 30 through Sep 8). I will be planning to do more fun things and also working remotely a bit. Those things will be more loosely planned since I'm not expecting many people to be there, but I would love it if you could join!"
  ],
  [
    "Can I bring someone else?",
    "Yes! Everyone gets a +1."
  ],
];

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <div><TextShadow color="green">Questions</TextShadow></div>
        </div>
        {/* <div className={styles.subtitle}>
          What are we doing?
        </div>
        <div className={styles.subtitle}>
          Other Questions
        </div> */}
        <div className={styles.faqContent}>
          {FAQ_CONTENT.map((entry, index) => 
            <Card key={index} width="var(--card-size)">
              <div className={styles.faqSubtitle}>
                {entry[0]}
              </div>  
              <div className={styles.bodyText}>
                {entry[1]}
              </div>
            </Card>
          )}
        </div>
        <TextButton href={RSVP_LINK}>RSVP now!</TextButton>
        <TextButton disabled href="/schedule">See the itinerary {`(Under construction)`}</TextButton>
      </div>
    </main>
  );
}
