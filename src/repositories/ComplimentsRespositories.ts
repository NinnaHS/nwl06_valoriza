import { Repository, EntityRepository} from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRespositories extends Repository<Compliment>{

}

export {ComplimentsRespositories};