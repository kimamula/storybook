import { storiesOf } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs/angular';
import { DiComponent, symbol } from './di.component';

storiesOf('Custom|Dependencies', module)
  .add('inputs and inject dependencies', () => ({
    component: DiComponent,
    props: {
      title: 'Component dependencies',
      obj: { [symbol]: 'foo', str: 'bar' },
    },
  }))
  .addDecorator(withKnobs)
  .add('inputs and inject dependencies with knobs', () => ({
    component: DiComponent,
    props: {
      title: text('title', 'Component dependencies'),
      obj: { [symbol]: 'foo', str: 'bar' },
    },
  }));
