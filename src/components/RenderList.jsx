export default function News({ newsList }) {
  return (
    <>
      <section>
        {/**********************/}
        {newsList.map((item) => (
          <article key={item.id} newsList={item}></article>
        ))}
        {/**********************/}

        <article>
          <img src="" alt="" />
          <h3>Descripción de lista</h3>
          <p></p>
        </article>
      </section>
    </>
  );
}
// tool jsx
