import '../spec_helper';
import {UIButton} from '../../../src/react/buttons';
import {Icon} from '../../../src/react/iconography';

describe('UIButton', () => {
  let subject;

  beforeEach(() => {
    subject = ReactDOM.render(<UIButton>Click here</UIButton>, root);
  });

  it('creates a button', () => {
    expect('button').toHaveClass('pui-btn');
    expect('button').toHaveClass('pui-btn-default');
    expect('button').toHaveText('Click here');
  });

  describe('when href attribute is set', () => {
    beforeEach(() => {
      subject::setProps({href: 'http://example.com'});
    });

    it('creates a link', () => {
      expect('a.pui-btn').toHaveAttr('href', 'http://example.com');
    });
  });

  describe('aria-label', () => {
    it('uses the button text for the aria-label value by default', () => {
      expect('.pui-btn').toHaveAttr('aria-label', 'Click here');
    });

    describe('when the button contains icons', () => {
      beforeEach(() => {
        subject = ReactDOM.render(<UIButton icon={<Icon src="add"/>}>Click<Icon src="more_vert"/>here</UIButton>, root);
      });

      it('ignores icons with the button text', () => {
        expect('.pui-btn').toHaveAttr('aria-label', 'Click here');
      });
    });

    describe('when aria-label is specified', () => {
      beforeEach(() => {
        subject::setProps({'aria-label': 'my aria label'});
      });

      it('uses the supplied value', () => {
        expect('.pui-btn').toHaveAttr('aria-label', 'my aria label');
      });
    });

    describe('when icon-only', () => {
      beforeEach(() => {
        subject::setProps({iconOnly: true});
      });

      it('has no aria-label attribute for icon-only buttons', () => {
        expect('.pui-btn').not.toHaveAttr('aria-label');
      });
    });

    describe('when no button content', () => {
      beforeEach(() => {
        subject = ReactDOM.render(<UIButton/>, root);
      });

      it('has no aria-label attribute', () => {
        expect('.pui-btn').not.toHaveAttr('aria-label');
      });
    });
  });

  describe('type', () => {
    describe('for a link', () => {
      beforeEach(() => {
        subject::setProps({href: 'http://example.com'});
      });

      it('has no type attribute by default', () => {
        expect('a.pui-btn').not.toHaveAttr('type');
      });
    });

    describe('for a button', () => {
      it('has type button by default', () => {
        expect('button.pui-btn').toHaveAttr('type', 'button');
      });
    });

    describe('when type attribute is supplied', () => {
      describe('for a link', () => {
        beforeEach(() => {
          subject::setProps({href: 'http://example.com', type: 'text/html'});
        });

        it('passes that value to the link', () => {
          expect('a.pui-btn').toHaveAttr('type', 'text/html');
        });
      });

      describe('for a button', () => {
        beforeEach(() => {
          subject::setProps({type: 'submit'});
        });

        it('passes that value to the button', () => {
          expect('button.pui-btn').toHaveAttr('type', 'submit');
        });
      });
    });
  });

  describe('when kind is default', () => {
    beforeEach(() => {
      subject::setProps({kind: 'default'});
    });

    it('adds the kind class to the button', () => {
      expect('button.pui-btn').toHaveClass('pui-btn-default');
    });
  });

  describe('when kind is danger', () => {
    beforeEach(() => {
      subject::setProps({kind: 'danger'});
    });

    it('adds the kind class to the button', () => {
      expect('button.pui-btn').toHaveClass('pui-btn-danger');
    });
  });

  describe('when kind is brand', () => {
    beforeEach(() => {
      subject::setProps({kind: 'brand'});
    });

    it('adds the kind class to the button', () => {
      expect('button.pui-btn').toHaveClass('pui-btn-brand');
    });
  });

  describe('when kind is primary', () => {
    beforeEach(() => {
      subject::setProps({kind: 'primary'});
    });

    it('adds the kind class to the button', () => {
      expect('button.pui-btn').toHaveClass('pui-btn-primary');
    });
  });

  describe('when large is true', () => {
    beforeEach(() => {
      subject::setProps({large: true});
    });

    it('adds the large button class', () => {
      expect('button.pui-btn').toHaveClass('pui-btn-lg');
    });
  });

  describe('when full width is true', () => {
    beforeEach(() => {
      subject::setProps({fullWidth: true});
    });

    it('adds the large button class', () => {
      expect('button.pui-btn').toHaveClass('pui-btn-full');
    });
  });

  describe('when small is true', () => {
    beforeEach(() => {
      subject::setProps({small: true});
    });

    it('adds the large button class', () => {
      expect('button.pui-btn').toHaveClass('pui-btn-sm');
    });
  });

  describe('when iconOnly is true', () => {
    beforeEach(() => {
      subject::setProps({iconOnly: true});
    });

    it('adds the large button class', () => {
      expect('button.pui-btn').toHaveClass('pui-btn-icon');
    });
  });

  describe('when alt is true', () => {
    beforeEach(() => {
      subject::setProps({alt: true});
    });

    describe('when kind is default', () => {
      beforeEach(() => {
        subject::setProps({kind: 'default'});
      });

      it('adds appropriate alt class to the button', () => {
        expect('button.pui-btn').toHaveClass('pui-btn-default-alt');
      });
    });

    describe('when kind is danger', () => {
      beforeEach(() => {
        subject::setProps({kind: 'danger'});
      });

      it('adds appropriate alt class to the button', () => {
        expect('button.pui-btn').toHaveClass('pui-btn-danger-alt');
      });
    });

    describe('when kind is brand', () => {
      beforeEach(() => {
        subject::setProps({kind: 'brand'});
      });

      it('adds appropriate alt class to the button', () => {
        expect('button.pui-btn').toHaveClass('pui-btn-brand-alt');
      });
    });

    describe('when kind is primary', () => {
      beforeEach(() => {
        subject::setProps({kind: 'primary'});
      });

      it('adds appropriate alt class to the button', () => {
        expect('button.pui-btn').toHaveClass('pui-btn-primary-alt');
      });
    });
  });

  describe('when flat is true', () => {
    beforeEach(() => {
      subject::setProps({flat: true});
    });

    describe('when kind is default', () => {
      beforeEach(() => {
        subject::setProps({kind: 'default'});
      });

      it('adds appropriate flat class to the button', () => {
        expect('button.pui-btn').toHaveClass('pui-btn-default-flat');
      });
    });

    describe('when kind is danger', () => {
      beforeEach(() => {
        subject::setProps({kind: 'danger'});
      });

      it('adds appropriate flat class to the button', () => {
        expect('button.pui-btn').toHaveClass('pui-btn-danger-flat');
      });
    });

    describe('when kind is brand', () => {
      beforeEach(() => {
        subject::setProps({kind: 'brand'});
      });

      it('adds appropriate flat class to the button', () => {
        expect('button.pui-btn').toHaveClass('pui-btn-brand-flat');
      });
    });

    describe('when kind is primary', () => {
      beforeEach(() => {
        subject::setProps({kind: 'primary'});
      });

      it('adds appropriate flat class to the button', () => {
        expect('button.pui-btn').toHaveClass('pui-btn-primary-flat');
      });
    });
  });

  describe('when given a className', () => {
    beforeEach(() => {
      subject::setProps({className: 'custom-class-1 custom-class-2'});
    });

    it('passes custom classNames through', () => {
      expect('button').toHaveClass('custom-class-1');
      expect('button').toHaveClass('custom-class-2');
    });
  });

  describe('when given data attributes', () => {
    beforeEach(() => {
      subject::setProps({'data-click': 'myFunction', 'data-foo': 'bar'});
    });

    it('passes through the data-attributes', () => {
      expect('button').toHaveAttr('data-click', 'myFunction');
      expect('button').toHaveAttr('data-foo', 'bar');
    });
  });

  describe('icon property', () => {
    beforeEach(() => {
      subject::setProps({icon: <Icon src="add"/>});
    });

    it('renders with an icon child node if one is passed in', () => {
      expect('button.pui-btn span .icon').toExist();
    });
  });

  describe('iconPosition', () => {
    beforeEach(() => {
      subject::setProps({icon: <Icon src="spinner-sm"/>});
    });

    it('renders the icon to the left by default', () => {
      expect($('.icon').next().prop('tagName')).toEqual('SPAN');
    });

    describe('is set to left', () => {
      beforeEach(() => {
        subject::setProps({iconPosition: 'left'});
      });

      it('renders the icon to the left', () => {
        expect($('.icon').next().prop('tagName')).toEqual('SPAN');
      });
    });

    describe('is set right', () => {
      beforeEach(() => {
        subject::setProps({iconPosition: 'right'});
      });

      it('renders the icon to the right', () => {
        expect($('.icon').prev().prop('tagName')).toEqual('SPAN');
      });
    });
  });
});
