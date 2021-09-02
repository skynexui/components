import Box from '@devsoutinho/universalui/src/components/Box/web';
import Text from '@devsoutinho/universalui/src/components/Text/web';
import Image from '@devsoutinho/universalui/src/components/Image/web';
import { ComponentWrapper } from './types';

export default function componentToWeb(wrapper: ComponentWrapper) {
  return wrapper({ Box, Text, Image });
}
