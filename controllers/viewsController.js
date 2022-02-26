const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


exports.getOverview = catchAsync(async (req, res,next) =>{
    // 1) Get tour data from collection
  const tours = await Tour.find();

  // 2) Build template
  // 3) Render that template using tour data from 1)
    res.status(200).render('overview',{
      title:'All Tour',
      tours
    });
});

exports.getTour = catchAsync(async (req,res,next) => {

  const tour = await Tour.findOne(req.params).populate({
    path: 'reviews',
    fields: 'reviews rating user'
  });
    res.status(200).render('tour',{
      title: `${tour.name} Tour`,
      tour
    });
});
exports.getLoginForm = (req, res) => {
  console.log(`>>>>>>>>>>>>getLoginForm>`)
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};
