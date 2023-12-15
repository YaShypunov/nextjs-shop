import ButtonComponent from '../ui/ButtonComponent';
import classes from './results-title.module.css';

function ResultsTitleComponent({date}) {

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <ButtonComponent link='/events'>Show all events</ButtonComponent>
    </section>
  );
}

export default ResultsTitleComponent;
