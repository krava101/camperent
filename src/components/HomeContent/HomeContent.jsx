import scss from './HomeContent.module.scss';

function HomeContent() {
  return (
    <main className={scss.home}>
      <article>
        <h1>
          Welcome to CampeR<span>ent</span>
        </h1>
        <h2>Discover Ukraine in Comfort with Our Campers!</h2>
        <p>
          CampeRent offers convenient and flexible camper rentals to make your
          journey through Ukraine unforgettable. We understand that every
          traveler is unique, which is why we offer a camper for every need—from
          family trips to extreme adventures.
        </p>
      </article>
      <section>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <b>Wide Selection of Campers:</b> With us, you&apos;ll find campers
            for every taste and budget. Modern, well-equipped, and ready for the
            road.
          </li>
          <li>
            <b>Transparent Rental Terms:</b> No hidden fees or unnecessary
            complications. Choose the camper you like and hit the road
          </li>
          <li>
            <b>Flexible Booking:</b> Planning a weekend getaway or a whole
            summer trip? We offer flexible rental terms for any duration.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default HomeContent;
