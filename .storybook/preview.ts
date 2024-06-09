import {moduleMetadata, Preview} from "@storybook/angular";
import { RouterTestingModule } from "@angular/router/testing"

export const decorators = [
  moduleMetadata({
    imports: [RouterTestingModule],
  }),
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
