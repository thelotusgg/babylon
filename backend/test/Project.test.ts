import { BASE_URL } from "./TestCommon";
import { ProjectApiFp } from 'babylon-client/src/api';

test('create project successfully', async () => {
  ProjectApiFp().projectPost({
    "name": "TestName",
    "description": "TestDescription"
  });
})
