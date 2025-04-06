import express from 'express';
import { createTenant, getTenant, updateTenant } from '../controllers/tenantControllers';


const router = express.Router();

router.get('/:cognitoId', getTenant);       // GET /tenants/:cognitoId
router.put('/:cognitoId', updateTenant);    // PUT /tenants/:cognitoId
router.post('/', createTenant);             // POST /tenants

export default router;