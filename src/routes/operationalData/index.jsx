/**
 * Created by chencheng on 17-8-30.
 */
import EnumRouter from 'constants/EnumRouter';
import { MainLayout, AssembleRoute } from 'routes/routeTool';
import Run from './routes/run';

export default AssembleRoute([
    {
        Layout: MainLayout,
        path: EnumRouter.operateD_run,
        component: Run,
    }
]);
