import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
filterForm: FormGroup;
  filterFields: any[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterFields = [

      {
        column1: 'TaskName',
        column2: 'REQUIRED',
        column3: 'string',
        key: "TaskName",
        title: "Name of the task. No two tasks should have the same name. The task label included in the file name is derived from this 'TaskName' field by removing all non-alphanumeric characters (that is, all except those matching [0-9a-zA-Z]). For example 'TaskName' 'faces n-back' will correspond to task label facesnback. A RECOMMENDED convention is to name resting state task using labels beginning with rest.",
        column6: "TaskName",
        type: "text"
      },
      {
        column1: 'InstitutionName',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "InstitutionName",
        title: "Karolinska  Institute (copy and insert into the input field). The name of the institution in charge of the equipment that produced the measurements.",
        type: "text",
      
      },
      {
        column1: 'InstitutionAddress',
        column2: 'RECOMMENDED',
        column3: 'string or array of strings',
        key: "InstitutionAddress",
        title: "Nobels väg 9, 171 77, Stockholm, Sweden              (copy and insert into the input field) The address of the institution in charge of the equipment that produced the measurements.",
        type: "text"
      },
      {
        column1: 'InstitutionalDepartmentName',
        column2: 'RECOMMENDED',
        column3: 'object of string',
        key: "InstitutionalDepartmentName",
        title: "Department of Clinical Neuroscience (copy and insert into the input field)                         The department in the institution in charge of the equipment that produced the measurements.",
        type: "text"
      },
      {
        column1: 'Manufacturer',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "Manufacturer",
        title: "Neuromag/Elekta/Megin (copy and insert into the input field).          Manufacturer of the equipment that produced the measurements. For MEG scanners, this must be one of: 'CTF', 'Elekta/Neuromag', 'BTi/4D', 'KIT/Yokogawa', 'ITAB', 'KRISS', 'Other'. See the MEG Systems Appendix for preferred names.",
        type: "text"
      },
      {
        column1: 'ManufacturersModelName',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "ManufacturersModelName",
        title: "ElektaTRIUX (copy and insert into the input field) Manufacturer's model name of the equipment that produced the measurements. See the MEG Systems Appendix for preferred names.",
        type: "text"
      },
      {
        column1: 'SoftwareVersions',
        column2: 'RECOMMENDED',
        column3: 'array of strings',
        key: "SoftwareVersions",
        title: "??????Manufacturer's designation of software version of the equipment that produced the measurements.",
        type: "text"
      },
      {
        column1: 'TaskDescription',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "TaskDescription",
        title: "Longer description of the task.",
        type: "text"
      },
      {
        column1: 'Instructions',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "Instructions",
        title: "Text of the instructions given to participants before the recording. This is especially important in context of resting state recordings and distinguishing between eyes open and eyes closed paradigms.",
        type: "text"
      },
      {
        column1: 'CogAtlasID',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "CogAtlasID",
        title: "URI of the corresponding Cognitive Atlas Task term.",
        type: "text"
      },
      {
        column1: 'CogPOID',
        column2: 'RECOMMENDED',
        column3: 'array of strings',
        key: "EthicsApprovals",
        title: "List of ethics committee approvals of the research protocols and/or protocol identifiers.",
        type: "text"
      },
      {
        column1: 'DeviceSerialNumber',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "DeviceSerialNumber",
        title: "????The serial number of the equipment that produced the measurements. A pseudonym can also be used to prevent the equipment from being identifiable, so long as each pseudonym is unique within the dataset.",
        type: "text"
      },
      {
        column1: 'SamplingFrequency',
        column2: 'REQUIRED',
        column3: 'number',
        key: "SamplingFrequency",
        title: "??1000(copy and insert into the input field). Sampling frequency (in Hz) of all the data in the recording, regardless of their type (for example, 2400). The sampling frequency of data channels that deviate from the main sampling frequency SHOULD be specified in the channels.tsv file.",
        type: "text"
      },
      {
        column1: 'PowerLineFrequency',
        column2: 'REQUIRED',
        column3: 'number or "n/a"',
        key: "PowerLineFrequency",
        title: "??Frequency (in Hz) of the power grid at the geographical location of the instrument (for example, 50 or 60).",
        type: "text"
      },
      {
        column1: 'DewarPosition',
        column2: 'REQUIRED',
        column3: 'string',
        key: "DewarPosition",
        title: "Position of the dewar during the MEG scan: 'upright', 'supine' or 'degrees' of angle from vertical: for example on CTF systems, 'upright=15°, supine=90°'.",
        type: "text"
      },
      {
        column1: 'SoftwareFilters',
        column2: 'REQUIRED',
        column3: 'object of objects or "n/a"',
        key: "SoftwareFilters",
        title: 'Object of temporal software filters applied, or "n/a" if the data is not available. Each key-value pair in the JSON object is a name of the filter and an object in which its parameters are defined as key-value pairs (for example, {"Anti-aliasing filter": {"half-amplitude cutoff (Hz)": 500, "Roll-off": "6dB/Octave"}}).',
        type: "text"
      },
      {
        column1: 'DigitizedLandmarks',
        column2: 'REQUIRED',
        column3: 'boolean',
        key: "DigitizedLandmarks",
        title: 'true or false value indicating whether anatomical landmark points (fiducials) are contained within this recording.Must be one of: "true", "false".',
        type: "text"
      },
      {
        column1: 'DigitizedHeadPoints',
        column2: 'REQUIRED',
        column3: 'boolean',
        key: "DigitizedHeadPoints",
        title: 'true or false value indicating whether head points outlining the scalp/face surface are contained within this recording. Must be one of: "true", "false".',
        type: "text"
      },
      {
        column1: 'MEGChannelCount',
        column2: 'RECOMMENDED',
        column3: 'number',
        key: "MEGChannelCount",
        title: "Used to specify the locations and relevant attributes of all source datasets. Valid keys in each object include 'URL', 'DOI' (see URI), and 'Version' with string values.",
        type: "text"
      },
      {
        column1: 'MEGREFChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "MEGREFChannelCount",
        title: "Number of MEG reference channels (for example, 23). For systems without such channels (for example, Neuromag Vectorview), MEGREFChannelCount should be set to 0.Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'EEGChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "EEGChannelCount",
        title: "Number of EEG channels recorded simultaneously (for example, 21).Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'ECOGChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "ECOGChannelCount",
        title: "Number of ECoG channels.Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'SEEGChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "SEEGChannelCount",
        title: "Number of SEEG channels.Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'EOGChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "EOGChannelCount",
        title: "Number of EOG channels. Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'ECGChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "ECGChannelCount",
        title: "Number of ECG channels. Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'EMGChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "EMGChannelCount",
        title: "Number of EMG channels. Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'MiscChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "MiscChannelCount",
        title: "Number of miscellaneous analog channels for auxiliary signals. Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'TriggerChannelCount',
        column2: 'RECOMMENDED',
        column3: 'integer',
        key: "EMGChannelCount",
        title: "Number of channels for digital (TTL bit level) triggers.Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'RecordingDuration',
        column2: 'RECOMMENDED',
        column3: 'number',
        key: "RecordingDuration",
        title: "Length of the recording in seconds (for example, 3600).",
        type: "text"
      },
      {
        column1: 'RecordingType',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "RecordingType",
        title: 'Defines whether the recording is "continuous", "discontinuous", or "epoched", where "epoched" is limited to time windows about events of interest (for example, stimulus presentations or subject responses).Must be one of: "continuous", "epoched", "discontinuous".',
        type: "text"
      },
      {
        column1: 'EpochLength',
        column2: 'RECOMMENDED',
        column3: 'number',
        key: "EpochLength",
        title: "Duration of individual epochs in seconds (for example, 1) in case of epoched data. If recording was continuous or discontinuous, leave out the field.Must be a number greater than or equal to 0.",
        type: "text"
      },
      {
        column1: 'ContinuousHeadLocalization',
        column2: 'RECOMMENDED',
        column3: 'number or array of numbers',
        key: "ContinuousHeadLocalization",
        title: "List of frequencies (in Hz) used by the head localisation coils ('HLC' in CTF systems, 'HPI' in Elekta, 'COH' in BTi/4D) that track the subject's head position in the MEG helmet (for example, [293, 307, 314, 321]).",
        type: "text"
      },
      {
        column1: 'MaxMovement',
        column2: 'RECOMMENDED',
        column3: 'number',
        key: "MaxMovement",
        title: "Maximum head movement (in mm) detected during the recording, as measured by the head localisation coils (for example, 4.8).",
        type: "text"
      },
      {
        column1: 'SubjectArtefactDescription',
        column2: 'RECOMMENDED',
        column3: 'string',
        key: "SubjectArtefactDescription",
        title: 'Freeform description of the observed subject artefact and its possible cause (for example, "Vagus Nerve Stimulator", "non-removable implant"). If this field is set to "n/a", it will be interpreted as absence of major source of artifacts except cardiac and blinks.',
        type: "text"
      },
      {
        column1: 'AssociatedEmptyRoom',
        column2: 'RECOMMENDED',
        column3: 'array or string',
        key: "AssociatedEmptyRoom",
        title: "One or more BIDS URIs pointing to empty-room file(s) associated with the subject's MEG recording. Using forward-slash separated paths relative to the dataset root is DEPRECATED",
        type: "text"
      },
      {
        column1: 'HardwareFilters',
        column2: 'RECOMMENDED',
        column3: 'object of objects or "n/a"',
        key: "HardwareFilters",
        title: 'Object of temporal hardware filters applied, or "n/a" if the data is not available. Each key-value pair in the JSON object is a name of the filter and an object in which its parameters are defined as key-value pairs. For example, {"Highpass RC filter": {"Half amplitude cutoff (Hz)": 0.0159, "Roll-off": "6dB/Octave"}}.',
        type: "text"
      },
      {
        column1: 'EEGPlacementScheme',
        column2: 'OPTIONAL',
        column3: 'string',
        key: "EEGPlacementScheme",
        title: 'Placement scheme of EEG electrodes. Either the name of a standardized placement system (for example, "10-20") or a list of standardized electrode names (for example, ["Cz", "Pz"]).',
        type: "text"
      },
      {
        column1: 'CapManufacturer',
        column2: 'OPTIONAL',
        column3: 'string',
        key: "CapManufacturer",
        title: 'Name of the cap manufacturer (for example, "EasyCap").',
        type: "text"
      },
      {
        column1: 'CapManufacturersModelName',
        column2: 'OPTIONAL',
        column3: 'string',
        key: "CapManufacturersModelName",
        title: 'Manufacturer designation of the cap model (for example, "actiCAP 64 Ch Standard-2").',
        type: "text"
      },
      {
        column1: 'EEGReference',
        column2: 'OPTIONAL',
        column3: 'string',
        key: "EEGReference",
        title: 'General description of the reference scheme used and (when applicable) of location of the reference electrode in the raw recordings (for example, "left mastoid", "Cz", "CMS"). If different channels have a different reference, this field should have a general description and the channel specific reference should be defined in the channels.tsv file.',
        type: "text"
      },
    ];

    

    this.filterForm = this.generateFilterForm();
    this.filterForm.get('Authors').valueChanges.subscribe(() => {
      this.onAuthorsChange();
    });
    this.filterForm.get('Funding').valueChanges.subscribe(() => {
      this.onFundingChange();
    });
    this.filterForm.get('ReferencesAndLinks').valueChanges.subscribe(() => {
      this.onReferencesAndLinksChange();
    });
  }

  generateFilterForm(): FormGroup {
    const baseForm = this.fb.group({});
    this.filterFields.forEach(field => {
      baseForm.addControl(field.key, this.generateFormGroup(baseForm, field));
    });
    console.log(baseForm);
    return baseForm;
  }

  generateFormGroup(baseForm: FormGroup, field: { group: any[]; }): FormGroup|FormControl {
    if (field.group) {
      const formGroup = this.fb.group({});
      field.group.forEach(item => {
        formGroup.addControl(item.key, this.generateFormGroup(formGroup, item));
      });
      return formGroup;
    }

      return new FormControl("");
  }

  onAuthorsChange() {
    const authorsControl = this.filterForm.get('Authors');
    const authorsValue = authorsControl.value;
    if (typeof authorsValue === 'string') {
      const authors = authorsValue.split(',').map(author => author.replace(/^\s+/, ''));
      authorsControl.setValue(authors);
    }
  }

  onFundingChange() {
    const FundingControl = this.filterForm.get('Funding');
    const FundingValue = FundingControl.value;
    if (typeof FundingValue === 'string') {
      const Funding = FundingValue.split(',').map(Funding => Funding.replace(/^\s+/, ''));
      FundingControl.setValue(Funding);
    }
  }

  onReferencesAndLinksChange() {
    const ReferencesAndLinksControl = this.filterForm.get('ReferencesAndLinks');
    const ReferencesAndLinksValue = ReferencesAndLinksControl.value;
    if (typeof ReferencesAndLinksValue === 'string') {
      const ReferencesAndLinks = ReferencesAndLinksValue.split(',').map(ReferenceAndLink => ReferenceAndLink.replace(/^\s+/, ''));
      ReferencesAndLinksControl.setValue(ReferencesAndLinks);
    }
  }

  download() {
    // Get the form data as a JSON object
    const formData = this.filterForm.value;
  
    // Convert the form data to a string
    const dataString = JSON.stringify(formData, null, 2);
  
    // Create a new blob with the data
    const blob = new Blob([dataString], { type: 'application/json' });
  
    // Create a URL for the blob
    const url = window.URL.createObjectURL(blob);
  
    // Create a new anchor element with the URL
    const a = document.createElement('a');
    a.href = url;
    a.download = '_meg.json';
  
    // Trigger a click on the anchor element
    document.body.appendChild(a);
    a.click();
  
    // Clean up the anchor element and URL object
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }  
}
