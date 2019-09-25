import { sandboxOf } from 'angular-playground';
import { NoticeComponent } from './notice.component';

export default sandboxOf(NoticeComponent)
  .add('default', {
    template: `<cm-notice>Hey sam</cm-notice>`
  });
