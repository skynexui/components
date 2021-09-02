import Box from '@devsoutinho/universalui/src/components/Box/native';
import Text from '@devsoutinho/universalui/src/components/Text/native';
import Image from '@devsoutinho/universalui/src/components/Image/native';
import { ComponentWrapper } from './types';

export default function componentToNative(wrapper: ComponentWrapper) {
  return wrapper({ Box, Text, Image });
}
