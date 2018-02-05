class Stages {
  constructor(elem, id) {
    this._id = id;
    this._$stages = $(elem);
  }

  initEventListeners() {
    const self = this;
    const updateStages = function changeStagesStatus(event) {
      const $stage = $(event.target);
      if (!($stage.hasClass('stages__stage'))) {
        return;
      }
      const currentStageIndex = $stage.index();
      const lastStageIndex = self._$stages.children().length - 1;

      for (let i = 0; i <= currentStageIndex; i += 1) {
        $($('.stages__stage', self._$stages).get(i))
          .addClass('stages__stage_active')
          .removeClass('stages__stage_inactive');
      }
      for (let i = currentStageIndex + 1; i <= lastStageIndex; i += 1) {
        $($('.stages__stage', self._$stages).get(i))
          .addClass('stages__stage_inactive')
          .removeClass('stages__stage_active');
      }
    };

    this._$stages.on('click', updateStages);
    return this;
  }
}

const $stages = $('.stages');
let id = 0;
$stages.each((index, elem) => {
  const stages = new Stages(elem, id);
  stages.initEventListeners();
  id += 1;
});
