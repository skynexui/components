import { BoxPropsBase } from '../../components/Box/styles';
import { TextPropsBase } from '../../components/Text/styles';
import { ImagePropsBase } from '../../components/Image/styles';

export type SkynexComponents = {
  Box: (props: BoxPropsBase) => JSX.Element
  Text: (props: TextPropsBase) => JSX.Element
  Image: (props: ImagePropsBase) => JSX.Element
}

export type ComponentWrapper = (Components : SkynexComponents) => () => JSX.Element;
