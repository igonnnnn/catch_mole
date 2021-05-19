import Board from "../components/Board";
import StoryPane from "./StoryPane";

export default {
  title: 'Example/Board',
  component: Board,
};

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Board, StoryPane },
  template:
    '<story-pane><board @onClick="onClick" :row="row" :col="col" :pause="pause" :start="start"/></story-pane>',
});
