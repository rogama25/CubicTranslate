import type { Meta, StoryObj } from "@storybook/react";
import {Table} from "@/components/Table/Table";
import { TranslationContext } from "@/components/TranslationsContextProvider/TranslationContextProvider";

const meta: Meta<typeof Table> = {
  component: Table
};

export default meta;
type Story = StoryObj<typeof Table>;

function generateData() {
  const originals: {[key: string]: string} = {};
  const translations: {[key: string]: string} = {};
  for (let i = 0; i < 100; i++) {
    originals[i] = `Original ${i}`;
    translations[i] = `Translation ${i}`;
  }
  return {
    loaded: true,
    original: originals,
    translation: translations
  };
}

export const Default: Story = {
  render: () => {
    const data = generateData();
    return <TranslationContext.Provider value={data}>
      <Table/>
    </TranslationContext.Provider>;
  }
};
