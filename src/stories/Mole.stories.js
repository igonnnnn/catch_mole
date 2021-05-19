import Mole from "../components/Mole";
import StoryPane from "./StoryPane";
export default {
  title: "Example/Mole",
  component: Mole,
};

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Mole, StoryPane },
  template:
    '<story-pane><mole :show="show" :pause="pause" :fast="fast" @onclick="hit = true;"/></story-pane>',
});
