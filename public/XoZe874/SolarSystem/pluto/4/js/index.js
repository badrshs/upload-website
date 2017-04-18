// Read the article
// http://css-tricks.com/polylion

var tmax_opts = {
  delay: 0.5,
  repeat: -1,
  repeatDelay: 0.5,
  yoyo: true
};

var tmax_tl      = new TimelineMax(tmax_opts),
    cat_shapes   = $('svg.cat > g polygon'),
    cat_stagger  = 0.00475,
    cat_duration = 1.5;

var cat_staggerFrom = {
  scale: 0,
  opacity: 0,
  transformOrigin: 'center center',
};

var cat_staggerTo = {
  opacity: 1,
  scale: 1,
  ease: Elastic.easeInOut
};

tmax_tl.staggerFromTo(cat_shapes, cat_duration, cat_staggerFrom, cat_staggerTo, cat_stagger, 0);