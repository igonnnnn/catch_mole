import Bomb from "../components/Bomb";
import StoryPane from "./StoryPane.vue";
export default {
  title: "Example/Bomb",
  component: Bomb,
};

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Bomb, StoryPane },
  template:
    '<story-pane><bomb :show="show" :pause="pause" :fast="fast" @onclick="hit = true;"/></story-pane>',
});