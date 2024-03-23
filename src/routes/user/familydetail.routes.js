import { Router } from "express";
import {
  addFamilyDetails,
  getFamilyDetails,
  addContactDetails,
  listContactDetails,
  addReligiousBeliefs,
  listReligiousBeliefs,
  addLifestyleInterests,
  listLifestyleInterests,
} from "../../controllers/user/familyAndContact.controllers.js";
import { verifyJWT } from "../../middlewares/userauth.middlewares.js";
import { validate } from "../../validators/validate.js";
import {
  addFamilyDetailsValidator,
  addContactDetailsValidator,
  addreligiosBeliefsValidator,
  addLifestyleInterestsValidator,
} from "../../validators/user/familty.validators.js";

const router = Router();
router.use(verifyJWT);
router
  .route("/family-details")
  .post(addFamilyDetailsValidator(), validate, addFamilyDetails)
  .get(getFamilyDetails);

router
  .route("/contact-details")
  .post(addContactDetailsValidator(), validate, addContactDetails)
  .get(listContactDetails);

router
  .route("/religious-beliefs")
  .post(addreligiosBeliefsValidator(), validate, addReligiousBeliefs)
  .get(listReligiousBeliefs);
router
  .route("/lifestyle-interests")
  .post(addLifestyleInterestsValidator(), validate, addLifestyleInterests)
  .get(listLifestyleInterests);

export default router;
