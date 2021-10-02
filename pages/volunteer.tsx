import type { NextPage } from "next";
import Layout from "../components/Layout";

const StudioRecordings: NextPage = () => {
  return (
    <Layout title="Volunteer">
      <div>
        <h2>Join Our Community!</h2>

        <p>
          Volunteer by filling out our{" "}
          <a
            href="https://forms.gle/f9P9kfv3hEsKstgD9"
            target="_blank"
            rel="noreferrer"
          >
            DJ application
          </a>
          .
        </p>
        <h2>DJs, Blawgers, and More!</h2>

        <p>
          At the beginning of every quarter, we look for more volunteers like
          you. We’re interested in students with passion and diversity in music
          and want to find other like minded individuals.
        </p>

        <h2>Volunteer DJ</h2>

        <p>
          Being a volunteer DJ means you’d be guaranteed at least hour a week to
          broadcast your show to the University of Washington campus! Show
          concepts can range from talk shows, comedy, music niches, and much
          more. We hire the majority of our DJs in the fall, however DJ
          applications do open every quarter.
        </p>
        <h2>Volunteer Blawgger</h2>

        <p>
          Blawgers have the opportunity to practice journalism and write about
          local music in Seattle, such as attending events and listening to
          music. Rainy Dawg Radio ocasionally supplies bloggers with free
          tickets to local shows to fuel blogging content and promote local
          acts. View the blog to get an idea, and break our mold.
        </p>
        <h2>Specialty Music Lead</h2>

        <p>
          As a specialty music lead you’ll aid our director of music by being
          passionate about the music genres you love! Keeping up to date in your
          specialized genre and making suggestions to our music director allows
          you an influence over the music rotation at Rainy Dawg Radio.
        </p>

        <p>
          <i>
            Find Rainy Dawg Radio on the first floor of the HUB in room 131N or
            by calling (206) 685-0890!
          </i>
        </p>
      </div>
    </Layout>
  );
};

export default StudioRecordings;
