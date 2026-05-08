import React, {ReactNode} from 'react';
import styled, {css} from 'styled-components';
import {motion, type Variants} from 'framer-motion';
import {colors} from 'lib/theme';

export const STYLES = {
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500'
  }
};

interface Props {
  children?: ReactNode;
  align?: 'center' | 'inherit' | 'left' | 'right' | 'justify';
  color?: string;
  display?: 'inherit' | 'initial' | 'block' | 'inline' | 'inline-block';
  marginBottom?: string;
  noWrap?: boolean;
  type: 'Display' | 'Header' | 'Hero' | 'Title' | 'Subtitle' | 'Body' | 'Section' | 'Caption';
  variants?: Variants;
}

type MixinProps = Pick<Props, 'align' | 'color' | 'display' | 'marginBottom' | 'noWrap'>;

const typographyPropsMixin = ({align, color, display, marginBottom, noWrap}: MixinProps) => {
  return css`
    color: ${color};
    display: ${display ? display : 'inherit'};
    margin: 0 0 ${marginBottom} 0;
    overflow: ${noWrap ? 'hidden' : null};
    text-align: ${align ? align : 'inherit'};
    text-overflow: ${noWrap ? 'ellipsis' : null};
    white-space: ${noWrap ? 'noWrap' : null};
  `;
};

const DisplayText = styled(motion.h1)<MixinProps>`
  font-size: 28px;
  font-weight: ${STYLES.fontWeight.medium};
  letter-spacing: 0;
  line-height: 36px;
  ${typographyPropsMixin}
`;

const HeaderText = styled(motion.h2)<MixinProps>`
  font-size: 36px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 26px;
  ${typographyPropsMixin}
`;

const HeroText = styled(motion.h3)<MixinProps>`
  font-size: 22px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 26px;
  ${typographyPropsMixin}
`;

const TitleText = styled(motion.h4)<MixinProps>`
  font-size: 16px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 20px;
  ${typographyPropsMixin}
`;

const SubtitleText = styled(motion.h5)<MixinProps>`
  font-size: 14px;
  font-weight: ${STYLES.fontWeight.light};
  letter-spacing: 0;
  line-height: 20px;
  ${typographyPropsMixin}
`;

const BodyText = styled(motion.p)<MixinProps>`
  font-size: 12px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 16px;
  ${typographyPropsMixin}
`;

const SectionText = styled(motion.p)<MixinProps>`
  font-size: 11px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0.8px;
  line-height: 13px;
  text-transform: uppercase;
  ${typographyPropsMixin}
`;

const CaptionText = styled(motion.p)<MixinProps>`
  font-size: 10px;
  font-weight: ${STYLES.fontWeight.regular};
  letter-spacing: 0;
  line-height: 12px;
  ${typographyPropsMixin}
`;

const typographyTypeMap = {
  'Display': DisplayText,
  'Header': HeaderText,
  'Hero': HeroText,
  'Title': TitleText,
  'Subtitle': SubtitleText,
  'Body': BodyText,
  'Section': SectionText,
  'Caption': CaptionText
};

const Typography = (props: Props) => {
  const {type, children, color=colors.blueGrey.darken3} = props;
  const TypographyComponent = typographyTypeMap[type] || typographyTypeMap['Body'];

  return (
    <TypographyComponent
      color={color}
      {...props}
    >
      {children}
    </TypographyComponent>
  );
};

export default Typography;
