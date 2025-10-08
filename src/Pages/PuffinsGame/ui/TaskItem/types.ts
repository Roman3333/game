import { TaskItem } from '../TasksList/types';

export interface TaskItemProps extends TaskItem {
  handleOpenGratsModal: (obj: any) => void;
}
