import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { string, object } from 'prop-types';
import { Label } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import { labels } from '../../utils';

export default class GroupDetailsTaskRow extends PureComponent {
  static propTypes = {
    task: object.isRequired,
    taskGroupId: string.isRequired
  };

  render() {
    const { task, taskGroupId } = this.props;

    return (
      <tr>
        <td>
          <Label bsSize="sm" bsStyle={labels[task.status.state]}>
            {task.status.state}
          </Label>
        </td>
        <td>
          <Link
            to={`/groups/${taskGroupId}/tasks/${task.status.taskId}/details`}
            replace>
            {task.task.metadata.name}&nbsp;&nbsp;&nbsp;<Icon name="long-arrow-right" />
          </Link>
        </td>
      </tr>
    );
  }
}
