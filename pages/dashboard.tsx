import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import MainLayout from "../components/layouts/MainLayout";

export default function DashBoard() {
    return (
        <>
            <MainLayout >
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="row page-titles">
                            <div className="col-md-5 align-self-center">
                                <h4 className="text-themecolor">Dashboard 4</h4>
                            </div>
                            <div className="col-md-7 align-self-center text-end">
                                <div className="d-flex justify-content-end align-items-center">
                                    <ol className="breadcrumb justify-content-end">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard 4</li>
                                    </ol>
                                    <button type="button" className="btn btn-info d-none d-lg-block m-l-15 text-white"><i
                                        className="fa fa-plus-circle"></i> Create New</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">TOTAL VISIT</h5>
                                        <div className="d-flex no-block align-items-center m-t-20 m-b-20">
                                            <div id="sparklinedash"></div>
                                            <div className="ms-auto">
                                                <h2 className="text-success"><i className="ti-arrow-up"></i> <span
                                                    className="counter">8659</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sparkline8" className="sparkchart"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">TOTAL PAGE VIEWS</h5>
                                        <div className="d-flex no-block align-items-center m-t-20 m-b-20">
                                            <div id="sparklinedash2"></div>
                                            <div className="ms-auto">
                                                <h2 className="text-purple"><i className="ti-arrow-up"></i> <span
                                                    className="counter">7469</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sparkline8" className="sparkchart"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">UNIQUE VISITOR</h5>
                                        <div className="d-flex no-block align-items-center m-t-20 m-b-20">
                                            <div id="sparklinedash3"></div>
                                            <div className="ms-auto">
                                                <h2 className="text-info"><i className="ti-arrow-up"></i> <span
                                                    className="counter">6011</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sparkline8" className="sparkchart"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">BOUNCE RATE</h5>
                                        <div className="d-flex no-block align-items-center m-t-20 m-b-20">
                                            <div id="sparklinedash4"></div>
                                            <div className="ms-auto">
                                                <h2 className="text-danger"><i className="ti-arrow-down"></i> <span
                                                    className="counter">18%</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sparkline8" className="sparkchart"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h5 className="card-title m-b-40">SALES IN 2018</h5>
                                                <p>Lorem ipsum dolor sit amet, ectetur adipiscing elit. viverra tellus.
                                                    ipsumdolorsitda amet, ectetur adipiscing elit.</p>
                                                <p>Ectetur adipiscing elit. viverra tellus.ipsum dolor sit amet, dag adg
                                                    ecteturadipiscingda elitdglj. vadghiverra tellus.</p>
                                            </div>
                                            <div className="col-md-8 col-sm-6 col-xs-12">
                                                <div id="morris-area-chart" style={{ height: '250px' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title m-b-0">WEATHER</h5>
                                    </div>
                                    <div className="card-body bg-light">
                                        <div className="d-flex no-block align-items-center">
                                            <span>
                                                <h2 className="">Monday</h2><small>7th May 2017</small>
                                            </span>
                                            <div className="ms-auto">
                                                <canvas className="sleet" width="44" height="44"></canvas> <span
                                                    className="display-6">32<sup>°F</sup></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row pb-1">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-6 py-2">
                                                        <span>Wind</span>
                                                    </div>
                                                    <div className="col-6 py-2 text-truncate">
                                                        <span className="font-medium">ESE 17 mph</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 py-2">
                                                        <span>Humidity</span>
                                                    </div>
                                                    <div className="col-6 py-2">
                                                        <span className="font-medium">83%</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 py-2">
                                                        <span>Pressure</span>
                                                    </div>
                                                    <div className="col-6 py-2">
                                                        <span className="font-medium">28.56 in</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-6 py-2 text-truncate">
                                                        <span>Cloud Cover</span>
                                                    </div>
                                                    <div className="col-6 py-2">
                                                        <span className="font-medium">78%</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 py-2">
                                                        <span>Ceiling</span>
                                                    </div>
                                                    <div className="col-6 py-2">
                                                        <span className="font-medium">25760 ft</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4 pt-3">

                                            <div className="col-lg-2 col-md-4 col-4 text-center">
                                                <h5>Tue</h5>
                                                <div className="m-t-10 m-b-10">
                                                    <canvas className="sleet" width="30" height="30"></canvas>
                                                </div>
                                                <h5>32<sup>°F</sup></h5>
                                            </div>

                                            <div className="col-lg-2 col-md-4 col-4 text-center">
                                                <h5 className="text-nowrap">Wed</h5>
                                                <div className="m-t-10 m-b-10">
                                                    <canvas className="clear-day" width="30" height="30"></canvas>
                                                </div>
                                                <h5>34<sup>°F</sup></h5>
                                            </div>

                                            <div className="col-lg-2 col-md-4 col-4 text-center">
                                                <h5>Thu</h5>
                                                <div className="m-t-10 m-b-10">
                                                    <canvas className="partly-cloudy-day" width="30" height="30"></canvas>
                                                </div>
                                                <h5>31<sup>°F</sup></h5>
                                            </div>

                                            <div className="col-lg-2 col-md-4 col-4 text-center">
                                                <h5>Fri</h5>
                                                <div className="m-t-10 m-b-10">
                                                    <canvas className="cloudy" width="30" height="30"></canvas>
                                                </div>
                                                <h5>32<sup>°F</sup></h5>
                                            </div>

                                            <div className="col-lg-2 col-md-4 col-4 text-center">
                                                <h5>Sat</h5>
                                                <div className="m-t-10 m-b-10">
                                                    <canvas className="snow" width="30" height="30"></canvas>
                                                </div>
                                                <h5>12<sup>°F</sup></h5>
                                            </div>

                                            <div className="col-lg-2 col-md-4 col-4 text-center">
                                                <h5>Sun</h5>
                                                <div className="m-t-10 m-b-10">
                                                    <canvas className="wind" width="30" height="30"></canvas>
                                                </div>
                                                <h5>32<sup>°F</sup></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">USER ACTIVITY</h5>
                                        <div className="steamline m-t-40">
                                            <div className="sl-item">
                                                <div className="sl-left bg-success"> <i className="ti-user"></i></div>
                                                <div className="sl-right">
                                                    <div className="font-medium">Meeting today <span className="sl-date"> 5pm</span>
                                                    </div>
                                                    <div className="desc">you can write anything </div>
                                                </div>
                                            </div>
                                            <div className="sl-item">
                                                <div className="sl-left bg-info"><i className="fa fa-image"></i></div>
                                                <div className="sl-right">
                                                    <div className="font-medium">Send documents to Clark</div>
                                                    <div className="desc">Lorem Ipsum is simply </div>
                                                </div>
                                            </div>
                                            <div className="sl-item">
                                                <div className="sl-left"> <img className="img-circle" alt="user"
                                                    src="../assets/images/users/2.jpg" /> </div>
                                                <div className="sl-right">
                                                    <div className="font-medium">Go to the Doctor <span className="sl-date">5 minutes
                                                        ago</span></div>
                                                    <div className="desc">Contrary to popular belief</div>
                                                </div>
                                            </div>
                                            <div className="sl-item mb-0">
                                                <div className="sl-left"> <img className="img-circle" alt="user"
                                                    src="../assets/images/users/3.jpg" /> </div>
                                                <div className="sl-right">
                                                    <div><a href="#">Tiger Sroff</a> <span className="sl-date">5
                                                        minutes ago</span></div>
                                                    <div className="desc">Approve meeting with tiger
                                                        <br /><a href="#"
                                                            className="btn m-t-10 m-r-5 btn-rounded btn-outline-success">Apporve</a>
                                                        <a href="#"
                                                            className="btn m-t-10 btn-rounded btn-outline-danger">Refuse</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">FEEDS</h5>
                                        <ul className="feeds mt-3">
                                            <li>
                                                <div className="bg-info"><i className="far fa-bell"></i></div> You have 4 pending tasks.
                                                <span className="text-muted ms-auto">Just Now</span>
                                            </li>
                                            <li>
                                                <div className="bg-success"><i className="ti-server"></i></div> Server #1
                                                overloaded.<span className="text-muted ms-auto">2 Hours ago</span>
                                            </li>
                                            <li>
                                                <div className="bg-warning"><i className="ti-shopping-cart"></i></div> New order
                                                received.<span className="text-muted ms-auto">31 May</span>
                                            </li>
                                            <li>
                                                <div className="bg-danger"><i className="ti-user"></i></div> New user registered.<span
                                                    className="text-muted ms-auto">30 May</span>
                                            </li>
                                            <li>
                                                <div className="bg-dark"><i className="far fa-bell"></i></div> New Version just arrived.
                                                <span className="text-muted ms-auto">27 May</span>
                                            </li>
                                            <li>
                                                <div className="bg-info"><i className="far fa-bell"></i></div> You have 4 pending tasks.
                                                <span className="text-muted ms-auto">Just Now</span>
                                            </li>
                                            <li className="py-1">
                                                <div className="bg-danger"><i className="ti-user"></i></div> New user registered.<span
                                                    className="text-muted ms-auto">30 May</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-lg-12 col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">ORDER STATUS</h5>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Invoice</th>
                                                    <th>User</th>
                                                    <th>Order date</th>
                                                    <th>Amount</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-center">Tracking Number</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><a href="#" className="link"> Order #53431</a></td>
                                                    <td>Steve N. Horton</td>
                                                    <td><span className="text-muted"><i className="fa fa-clock-o"></i> Oct 22,
                                                        2014</span></td>
                                                    <td>$45.00</td>
                                                    <td className="text-center">
                                                        <div className="label label-table label-success">Paid</div>
                                                    </td>
                                                    <td className="text-center">-</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="link"> Order #53432</a></td>
                                                    <td>Charles S Boyle</td>
                                                    <td><span className="text-muted"><i className="fa fa-clock-o"></i> Oct 24,
                                                        2014</span></td>
                                                    <td>$245.30</td>
                                                    <td className="text-center">
                                                        <div className="label label-table label-info">Shipped</div>
                                                    </td>
                                                    <td className="text-center"><i className="fa fa-plane"></i> CGX0089734531</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="link"> Order #53433</a></td>
                                                    <td>Lucy Doe</td>
                                                    <td><span className="text-muted"><i className="fa fa-clock-o"></i> Oct 24,
                                                        2014</span></td>
                                                    <td>$38.00</td>
                                                    <td className="text-center">
                                                        <div className="label label-table label-info">Shipped</div>
                                                    </td>
                                                    <td className="text-center"><i className="fa fa-plane"></i> CGX0089934571</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="link"> Order #53434</a></td>
                                                    <td>Teresa L. Doe</td>
                                                    <td><span className="text-muted"><i className="fa fa-clock-o"></i> Oct 15,
                                                        2014</span></td>
                                                    <td>$77.99</td>
                                                    <td className="text-center">
                                                        <div className="label label-table label-info">Shipped</div>
                                                    </td>
                                                    <td className="text-center"><i className="fa fa-plane"></i> CGX0089734574</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="link"> Order #53435</a></td>
                                                    <td>Teresa L. Doe</td>
                                                    <td><span className="text-muted"><i className="fa fa-clock-o"></i> Oct 12,
                                                        2014</span></td>
                                                    <td>$18.00</td>
                                                    <td className="text-center">
                                                        <div className="label label-table label-success">Paid</div>
                                                    </td>
                                                    <td className="text-center">-</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="link">Order #53437</a></td>
                                                    <td>Charles S Boyle</td>
                                                    <td><span className="text-muted"><i className="fa fa-clock-o"></i> Oct 17,
                                                        2014</span></td>
                                                    <td>$658.00</td>
                                                    <td className="text-center">
                                                        <div className="label label-table label-danger">Refunded</div>
                                                    </td>
                                                    <td className="text-center">-</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#" className="link">Order #536584</a></td>
                                                    <td>Scott S. Calabrese</td>
                                                    <td><span className="text-muted"><i className="fa fa-clock-o"></i> Oct 19,
                                                        2014</span></td>
                                                    <td>$45.58</td>
                                                    <td className="text-center">
                                                        <div className="label label-table label-warning">Unpaid</div>
                                                    </td>
                                                    <td className="text-center">-</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="right-sidebar">
                            <div className="slimscrollright">
                                <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle"></i></span>
                                </div>
                                <div className="r-panel-body">
                                    <ul id="themecolors" className="m-t-20">
                                        <li><b>With Light sidebar</b></li>
                                        <li><a href="#" data-skin="skin-default"
                                            className="default-theme working">1</a></li>
                                        <li><a href="#" data-skin="skin-green" className="green-theme">2</a></li>
                                        <li><a href="#" data-skin="skin-red" className="red-theme">3</a></li>
                                        <li><a href="#" data-skin="skin-blue" className="blue-theme">4</a></li>
                                        <li><a href="#" data-skin="skin-purple" className="purple-theme">5</a></li>
                                        <li><a href="#" data-skin="skin-megna" className="megna-theme">6</a></li>
                                        <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                                        <li><a href="#" data-skin="skin-default-dark"
                                            className="default-dark-theme ">7</a></li>
                                        <li><a href="#" data-skin="skin-green-dark"
                                            className="green-dark-theme">8</a></li>
                                        <li><a href="#" data-skin="skin-red-dark" className="red-dark-theme">9</a>
                                        </li>
                                        <li><a href="#" data-skin="skin-blue-dark"
                                            className="blue-dark-theme">10</a></li>
                                        <li><a href="#" data-skin="skin-purple-dark"
                                            className="purple-dark-theme">11</a></li>
                                        <li><a href="#" data-skin="skin-megna-dark"
                                            className="megna-dark-theme ">12</a></li>
                                    </ul>
                                    <ul className="m-t-20 chatonline">
                                        <li><b>Chat option</b></li>
                                        <li>
                                            <a href="#"><img src="../assets/images/users/1.jpg" alt="user-img"
                                                className="img-circle" /> <span>Varun Dhavan <small
                                                    className="text-success">online</small></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="../assets/images/users/2.jpg" alt="user-img"
                                                className="img-circle" /> <span>Genelia Deshmukh <small
                                                    className="text-warning">Away</small></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="../assets/images/users/3.jpg" alt="user-img"
                                                className="img-circle" /> <span>Ritesh Deshmukh <small
                                                    className="text-danger">Busy</small></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="../assets/images/users/4.jpg" alt="user-img"
                                                className="img-circle" /> <span>Arijit Sinh <small
                                                    className="text-muted">Offline</small></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="../assets/images/users/5.jpg" alt="user-img"
                                                className="img-circle" /> <span>Govinda Star <small
                                                    className="text-success">online</small></span></a>
                                        </li>
                                        <li>
                                            {/* <a href="#" />
                                                <img src="../assets/images/users/6.jpg" alt="user-img"
                                                className="img-circle" > <span>John Abraham<small
                                                    className="text-success">online</small></span>
                                            </a> */}
                                        </li>
                                        <li>
                                            <a href="#"><img src="../assets/images/users/7.jpg" alt="user-img"
                                                className="img-circle" /> <span>Hritik Roshan<small
                                                    className="text-success">online</small></span></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="../assets/images/users/8.jpg" alt="user-img"
                                                className="img-circle" /> <span>Pwandeep rajan <small
                                                    className="text-success">online</small></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
