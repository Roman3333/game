type THeading = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export interface TitleProps extends THeading {
  /**
   * Контент title.
   */
  children: React.ReactNode;
  /**
   * Тип title, по умолчанию h2.
   */
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Размер шрифта title, по умолчанию s(20/24).
   */
  size?: 's' | 'xs' | 'xm' | 'm' | 'l' | 'x' | 'xl' | 'xxl';
  /**
   * Цвет title, по умолчанию primary(белый).
   */
  variant?: 'primary' | 'secondary' | 'third' | 'danger';
  /**
   * Font-family title, по умолчанию rowdies.
   */
  font?: 'montserrat' | 'rowdies' | 'play-story' | 'bowlby';
  /**
   * Font-weight title, по умолчанию bold(700).
   */
  weight?: 'regular' | 'medium' | 'bold';
  /**
   * Кастомный класс для title.
   */
  className?: string;
}
