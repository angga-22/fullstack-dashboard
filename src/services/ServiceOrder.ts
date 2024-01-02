import RepoOrder from "../repositories/RepoOrder";

class ServiceOrder {
  private _repoOrder: RepoOrder;

  constructor(repoOrder: RepoOrder) {
    this._repoOrder = repoOrder;
  }

  public async list() {
    const orderList = await this._repoOrder.list();
    return orderList;
  }
}

export default ServiceOrder;
